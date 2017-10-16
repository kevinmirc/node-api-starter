import { get } from 'lodash';

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.statusCode || e.status || 500;
    ctx.body = get(e, 'error.error') || get(e, 'error') || e;
  }
};

export default errorHandler;
