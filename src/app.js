import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import convert from 'koa-convert';
import chalk from 'chalk';
import Router from 'koa-rest-router';

import printResponseTime from './middlewares/printResponseTime';
import errorHandler from './middlewares/errorHandler';

const app = new Koa();
const port = process.env.PORT || 3000;
const router = new Router({ prefix: '/api' });

router.addRoute('GET', '/ping', async (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'pong';
  await next();
});

app.use(printResponseTime);
app.use(bodyParser());
app.use(convert(cors()));
app.use(errorHandler);
app.use(router.middleware());

app.listen(port);

console.info(chalk.cyan('\tlistening to port:'), chalk.yellow(port));
console.info(chalk.cyan('\tNODE_ENV:', chalk.yellow(process.env.NODE_ENV)));
