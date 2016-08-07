import Router from 'koa-router';
import product from '../models/product';
import convert from 'koa-convert';
import KoaBody from 'koa-body';

const router = new Router(),
      koaBody = convert(KoaBody());

    router
        .get('/product', async (ctx, next) => {
            ctx.body = await product.getAll()
        })
        .get('/product/:id', async (ctx, next) => {
            let result = await product.get(ctx.params.id);
            if (result) {
                ctx.body = result
            } else {
                ctx.status = 204
            }
        })
        .post('/product', koaBody, async (ctx, next) => {
            ctx.status = 201;
            ctx.body = await product.create(ctx.request.body)
        })
        .put('/product/:id', koaBody, async (ctx, next) => {
            ctx.status = 204;
            await product.update(ctx.params.id, ctx.request.body);
        })
        .delete('/product/:id', async (ctx, next) => {
            ctx.status = 204;
            await product.delete(ctx.params.id);
        });

export default { routes: () => router.routes(), allowedMethods: () => router.allowedMethods() }
