import Koa from 'koa';
import config from  'config';
import err from './middleware/error';

const app = new Koa();

app.use(err);

require('./routes')(app);

app.listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});