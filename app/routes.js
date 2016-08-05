import Router from 'koa-router';
import product from './models/product';
import KoaBody from 'koa-body';

const router = new Router(),
      koaBody = KoaBody();

export default function routes(app) {
    router
        .get('/product', async (ctx, next) => {
            ctx.body = await product.getAll()
        })
        .get('/product/:id', async (ctx, next) => {
            ctx.body = await product.get(ctx.params.id)
        })
        .post('/product/', koaBody, async (ctx, next) => {
            ctx.body = await product.create(ctx.request.body)
        })
        .put('/product/:id', koaBody, async (ctx, next) => {
            ctx.body = await product.update(ctx.params.id, ctx.request.body)
        })
        .delete('/product/:id', async (ctx, next) => {
            ctx.body = await product.delete(ctx.params.id)
        });
    app.use(router.routes());
    app.use(router.allowedMethods());
};