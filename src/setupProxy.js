const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/app/', {
      target: 'https://117.16.136.171/',
      secure: false,
    })
  );
  app.use(
    createProxyMiddleware('/restful/', {
      target: 'https://117.16.136.170/',
      secure: false,
    })
  );
};
