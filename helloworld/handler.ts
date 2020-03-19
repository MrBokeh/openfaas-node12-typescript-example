const handler = async (event: any, context: any, cb?: any) => {
  return context.status(200).succeed({
    'result': event.body
  });
};
export = handler;
