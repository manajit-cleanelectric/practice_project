# Testing API with Hoppscotch - Quick Guide

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

You should see:
```
✅ Server running at http://localhost:3000
```

## 🧪 Testing Endpoints with Hoppscotch

### Download Hoppscotch
- Visit: https://hoppscotch.io/
- Use the web version (no installation needed) or install desktop app

---

## 📝 Test Cases

### 1️⃣ GET All Products
**Method:** GET
**URL:** `http://localhost:3000/api/products`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [
    { "id": 1, "name": "Laptop", "price": 999, "category": "Electronics" },
    { "id": 2, "name": "Phone", "price": 599, "category": "Electronics" },
    { "id": 3, "name": "Keyboard", "price": 79, "category": "Accessories" }
  ]
}
```

---

### 2️⃣ GET Single Product
**Method:** GET
**URL:** `http://localhost:3000/api/products/1`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Product retrieved successfully",
  "data": { "id": 1, "name": "Laptop", "price": 999, "category": "Electronics" }
}
```

---

### 3️⃣ CREATE New Product
**Method:** POST
**URL:** `http://localhost:3000/api/products`

**Headers:** (Hoppscotch sets this automatically)
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "Monitor",
  "price": 299,
  "category": "Electronics"
}
```

**Expected Response (201):**
```json
{
  "success": true,
  "message": "Product created successfully",
  "data": { "id": 4, "name": "Monitor", "price": 299, "category": "Electronics" }
}
```

---

### 4️⃣ UPDATE Product
**Method:** PUT
**URL:** `http://localhost:3000/api/products/1`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "Gaming Laptop",
  "price": 1299
}
```

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Product updated successfully",
  "data": { "id": 1, "name": "Gaming Laptop", "price": 1299, "category": "Electronics" }
}
```

---

### 5️⃣ DELETE Product
**Method:** DELETE
**URL:** `http://localhost:3000/api/products/2`

**Expected Response (200):**
```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": { "id": 2, "name": "Phone", "price": 599, "category": "Electronics" }
}
```

---

## 💡 How to Use Hoppscotch

### Step 1: Open Hoppscotch
Go to https://hoppscotch.io/ in your browser

### Step 2: Create a Request
1. Click the **Method dropdown** (top left) to select GET, POST, PUT, DELETE
2. In the **URL field**, paste the endpoint URL
3. For POST/PUT requests, click **Body** tab and enter JSON

### Step 3: Send Request
1. Click the **Send** button (blue button)
2. View the **Response** in the right panel
3. Check the status code (200, 201, 404, etc.)

### Step 4: Inspect Response
- **Status Code**: Top right (✅ green = success)
- **Response Time**: Shows how fast the server responded
- **Response Body**: Raw JSON data returned
- **Headers**: Request/Response headers

---

## 🔍 Tips & Tricks

### Error Testing
Try requesting a non-existent product:
- **URL:** `http://localhost:3000/api/products/999`
- You should get **404 Not Found**

### Save Requests
In Hoppscotch, you can:
- Click the **Save** icon to save requests
- Create **Collections** to organize related requests
- Export/Import collections as JSON

### Check Request Details
- Click the **Request** tab in Hoppscotch to see:
  - Headers being sent
  - Body being sent
  - Query parameters

---

## 🛑 Troubleshooting

**"Cannot connect to localhost:3000"**
- Make sure the server is running: `npm start`
- Check if port 3000 is available

**"Error: Cannot find module 'express'"**
- Run: `npm install`

**JSON parsing error**
- Make sure Body is set to **JSON** (not Text)
- Verify JSON syntax is correct

---

Happy testing! 🎉
