// 导入koa-router模块
const Router = require('koa-router');
// 创建koa-router的实例router
const router = new Router();


router.get('/', ctx=>{
    ctx.body = "Hello World"
})


router.get('/person', ctx=>{
    ctx.response.body = {
        id: '1',
        name: 'wsb'
    }
})

module.exports = router;

