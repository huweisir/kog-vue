const fs = require('fs');
const path = require('path');

module.exports = router => {

    router.get('/', async(ctx, next) => {
            ctx.response.type = 'html';
            // ctx.body = ctx.response
            ctx.response.body = fs.createReadStream(path.join(__dirname, '../dist', '/index.html'));
        })
        // router.get('/backstage', async(ctx, next) => {
        //         ctx.response.type = 'html';
        //         ctx.response.body = fs.createReadStream(path.join(__dirname, '../dist', '/index.html'));
        //         console.log('success node app.js !')
        //     })
        // router.get('/page', async(ctx, next) => {
        //     ctx.response.type = 'html';
        //     ctx.response.body = fs.createReadStream(path.join(__dirname, '../dist', '/index.html'));
        // })
}