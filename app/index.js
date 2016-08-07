import Koa from 'koa';
import config from  'config';
import err from './middleware/error';
import {routes,allowedMethods} from './middleware/routes';

const app = new Koa();

app.use(err);
app.use(routes());
app.use(allowedMethods());

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});