import 'babel-polyfill';
import koa from 'koa';
import koaNunjucks2 from 'koa-nunjucks2';

const koaNunjucks2Middleware = koaNunjucks2('views', {autoescape: true});
const app = new koa();

app.use(koaNunjucks2Middleware);

const router = require('koa-router')();
app.use(router.routes());

router.get('/', async (ctx, next) => {
    ctx.render('index', {name: 'koa@2'});
})

app.listen(process.env.PORT || 3000);
