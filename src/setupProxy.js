const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/restful', {
      target: 'https://117.16.137.22/',
      changeOrigin: true,
    })
  );
};
