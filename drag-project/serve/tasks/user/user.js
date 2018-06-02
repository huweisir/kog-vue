const mongoose = require('mongoose');
const User = mongoose.model('User');
exports.getUserInfo = async(req) => {
    let user = await User.find()
    return user
}
exports.addUserInfo = async(req) => {
    let username = req.username || "";
    let userinfo = await User.findOne({ username });
    if (userinfo) {
        return { "errorCode": 400, "msg": "aleardy insert" }
    } else {
        let user = new User(req);
        let res = await user.save();
        debugger;
        return { "successCode": "200" }
    }
}