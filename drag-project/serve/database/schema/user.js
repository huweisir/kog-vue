const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        unique: true,
        required: true,
        type: String
    },
    email: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        unique: true,
        required: true,
        type: String
    },
    loginAttempts: {
        type: Number,
        required: true,
        default: 1
    },
    lockUntil: Number,
    meta: {
        createDate: {
            type: Date,
            default: Date.now()
        },
        updateDate: {
            type: Date,
            default: Date.now()
        }
    }
});
userSchema.virtual('lsLocked').get(() => {
    return !!(this.lockUntil && this.lockUntil > Date.now());
})

userSchema.pre('save', function(next) {
    //根据save中的isNew判断是否是新加
    debugger;
    if (this.isNew) {
        this.meta.createDate = this.meta.updateDate = Date.now();
    } else {
        this.meta.updateDate = Date.now();
    }
    next();
});

userSchema.pre('save', function(next) {
    if (this.isModified('password')) return next();
    //加盐
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (error, hash) => {
            if (error) return next(error);
            this.password = hash;
            next();
        })
    })
    next();
});
userSchema.methods = {
    comparePassword: (newPassword, oldPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(newPassword, oldPassword, (err, isMatch) => {
                if (!err) resolve(isMatch);
                else reject(err);
            })
        })
    },
    incLoginAttempts: (user) => {
        return new Promise((resolve, reject) => {
            if (this.lockUntil && this.lockUntil < Date.now()) {
                this.update({
                    $set: {
                        loginAttempts: 1
                    },
                    $unset: {
                        lockUntil: 1
                    }
                }, (err) => {
                    if (!err) resolve(true);
                    else reject(err);
                })
            } else {
                let updates = {
                    $inc: {
                        loginAttempts: 1
                    }
                }
                if (this.loginAttempts + 1 > MAX_LOGIN_ATTEMPTS && !this.isLock) {
                    updates.$set = {
                        lockUntil: Date.now() + LOCK_TIME
                    }
                }
                this.update(updates, err => {
                    if (!err) resolve(true);
                    else reject(err);
                })
            }
        })

    }
}

mongoose.model('User', userSchema);