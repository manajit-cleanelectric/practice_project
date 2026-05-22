const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory database (simple storage)
let products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 599, category: 'Electronics' },
  { id: 3, name: 'Keyboard', price: 79, category: 'Accessories' }
];

let nextId = 4;

// ==================== GET ENDPOINTS ====================

// GET all products
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    message: 'Products retrieved successfully',
    data: products
  });
});

// GET a single product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Product retrieved successfully',
    data: product
  });
});

// ==================== POST ENDPOINT ====================

// CREATE a new product
app.post('/api/products', (req, res) => {
  const { name, price, category } = req.body;
  
  // Validation
  if (!name || !price || !category) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: name, price, category'
    });
  }
  
  const newProduct = {
    id: nextId++,
    name,
    price,
    category
  };
  
  products.push(newProduct);
  
  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: newProduct
  });
});

// ==================== PUT ENDPOINT ====================

// UPDATE a product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  const { name, price, category } = req.body;
  
  // Update only provided fields
  if (name) product.name = name;
  if (price) product.price = price;
  if (category) product.category = category;
  
  res.json({
    success: true,
    message: 'Product updated successfully',
    data: product
  });
});

// ==================== DELETE ENDPOINT ====================

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  const deletedProduct = products.splice(index, 1);
  
  res.json({
    success: true,
    message: 'Product deleted successfully',
    data: deletedProduct[0]
  });
});

// ==================== TEST ENDPOINT ====================

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  GET    http://localhost:${PORT}/api/products`);
  console.log(`  GET    http://localhost:${PORT}/api/products/:id`);
  console.log(`  POST   http://localhost:${PORT}/api/products`);
  console.log(`  PUT    http://localhost:${PORT}/api/products/:id`);
  console.log(`  DELETE http://localhost:${PORT}/api/products/:id`);
});
