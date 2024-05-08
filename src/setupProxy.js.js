// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://admin.mavininfotech.com',
      changeOrigin: true,
      secure: false, // Bypass SSL certificate validation
    })
  );
};
