const handler = require('../handler');

test('Invoke helloworld handler', () => {
  let cb = (err, val) => {
    console.log("val", val);
    expect(val).toStrictEqual({
      result: '👋 hello world! 👋'
    });
  };
  let context = new FunctionContext(cb);
  handler(new FunctionEvent({
      body: '👋 hello world! 👋'
    }), context)
    .then(() => {
      expect(context.value).toBe(200);
    })
    .catch(err => {
      console.log(err);
      expect(err).toBe('');
    });
});

class FunctionEvent {
  constructor(req) {
    this.body = req.body;
    this.headers = req.headers;
    this.method = req.method;
    this.query = req.query;
    this.path = req.path;
  }
}

class FunctionContext {
  constructor(cb) {
    this.value = 200;
    this.cb = cb;
    this.headerValues = {};
    this.cbCalled = 0;
  }

  status(value) {
    if (!value) {
      return this.value;
    }

    this.value = value;
    return this;
  }

  headers(value) {
    if (!value) {
      return this.headerValues;
    }

    this.headerValues = value;
    return this;
  }

  succeed(value) {
    let err;
    this.cbCalled++;
    this.cb(err, value);
  }

  fail(value) {
    let message;
    this.cbCalled++;
    this.cb(value, message);
  }
}