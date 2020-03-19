const handler = async (event, context, cb?) => {
  return context.status(200).succeed({
    'result': '👋 hello world! 👋'
  });
};
export = handler;
