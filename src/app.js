const express = require('express');
const { monitorStock, getSummary } = require('./controllers/botController');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.post('/trade', monitorStock);  // Endpoint to trigger a trade
app.get('/summary', getSummary);   // Endpoint to get the summary report

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
