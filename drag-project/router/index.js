const appRouter = require('./main.js');
const userRouter = require('./user.js')

module.exports = (router) => {
    appRouter(router)
    userRouter(router);
}