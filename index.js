const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan route /products
app.use('/', productRoutes);

// Default route jika endpoint tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: 'Route tidak ditemukan' });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
