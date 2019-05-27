const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');
const Serve = require('koa-static');
const { resolve } = require('path');
const { connect, initSchemas } = require('./serve/database/init');
const mongoose = require('mongoose');
var bodyParser = require('koa-bodyparser');


const app = new Koa();
app.use(bodyParser());

(async() => {
    // app.use(async (ctx,next)=>{
    //     let startTime = new Date().getTime();
    //     await next()
    //     ctx.setHeader('useTime', endTime)
    // })
    await connect();
    initSchemas();
    //路由初始化
    const router = new Router();
    app.use(router.routes(app));
    app.use(router.allowedMethods());
    //引入路由
    const RouterImp = require('./router');
    RouterImp(router);
})();

app.use(Serve(resolve(__dirname, './dist')));
app.on('error', err => {
    console.error('server error', err);
});
app.listen(10000);