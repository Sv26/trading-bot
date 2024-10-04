const axios = require('axios');

const getStockPrice = async () => {
  try {
    const response = await axios.get(process.env.STOCK_API_URL);
    return response.data.price;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    throw new Error('Failed to fetch stock price');
  }
};

module.exports = { getStockPrice };
