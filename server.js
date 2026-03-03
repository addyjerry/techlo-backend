require('dotenv').config();
const connectDB = require('./config/db');

const productRoutes = require('./routes/productRoutes');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
    res.send('Techlo Electronics API is running...');
});


app.use('/api/products', productRoutes);
// Start Server
connectDB();
//error handling middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});