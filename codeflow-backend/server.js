const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS

// Proxy endpoint
app.use('/api', createProxyMiddleware({
  target: 'https://emkc.org',
  changeOrigin: true,
  pathRewrite: { '^/api': '/api/v2/piston' }, // Rewrite the URL path
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

