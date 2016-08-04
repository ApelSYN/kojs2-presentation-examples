import Router from 'koa-router';
import product from 'models/Product';

const router = new Router();

export default function routes(app) {
    router
        .get('/product', async (ctx,next) => {
            ctx.body = await product.getProducts()
        })
        //.get('/product/:id',    indexController.getProductById)
        //.post('/product/',      indexController.createProduct)
        //.put('/product/:id',    indexController.updateProduct)
        //.delete('/product/:id', indexController.removeItem);
        ;
    app.use(router.routes());
    app.use(router.allowedMethods());
};