const mongoose = require('mongoose');
const db = 'mongodb://localhost/drag';
const glob = require('glob');
const { resolve } = require('path');

mongoose.Promise = global.Promise;
exports.initSchemas = () => {
    let globCAll = glob.sync(resolve(__dirname, './schema', '**/*.{js,ts}'));
    console.log(globCAll);
    globCAll.forEach(require);
}
exports.connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true)
    }
    mongoose.connect(db);
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(db);

    });
    mongoose.connection.on('error', err => {
        console.log(err)
    });
    mongoose.connection.on('open', () => {
        console.log("MongoDB Connected successfully")
    })
}