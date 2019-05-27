const fs = require('fs');
const { addUserInfo, getUserInfo } = require('../serve/tasks/user/user.js')
module.exports = router => {
    router.get('/user/getuserinfo', async(ctx, next) => {
        let user = await getUserInfo();
        console.log(user);
        ctx.response.type = 'json';
        ctx.response.body = {
            data: user,
            success: true
        }
        next();
    })
    router.post('/user/adduserinfo', async(ctx, next) => {
        let params = ctx.request.body || {}
        console.log(params.email)
        let user = await addUserInfo(params);
        ctx.response.type = 'json';
        ctx.response.body = {
            data: user,
            success: true
        }
        next();
    })
}