const Koa = require('koa');

const app = new Koa();

const router =require('./routes/index');

app.use(router.routes());

// 监听端口
app.listen(3000, () => {
    console.log("服务器已启动，http://localhost:3000");
})