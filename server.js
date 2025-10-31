const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(logger);

// Basic routes
app.get('/', (req, res) => res.send('Inventory API is Running'));
app.get('/health', (req, res) => res.json({ status: 'Server is Healthy' }));

// Routes
app.use('/items', itemRoutes);

// 404 handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
