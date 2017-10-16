const printResponseTime = async (ctx, next) => {
  const start = new Date();
  console.info(`--> ${ctx.method} ${ctx.url}`);

  await next();

  const ms = new Date() - start;
  console.info(`<-- ${ctx.method} ${ctx.url} - ${ms}ms`);
};

export default printResponseTime;
