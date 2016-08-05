import Koa from 'koa';
import config from  'config';
import err from './middleware/error';
import routes from './routes';

const app = new Koa();

app.use(err);

routes(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});