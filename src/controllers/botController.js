const Trade = require('../services/tradeService');
const stockService = require('../services/stockService');
const { checkTrade, executeTrade } = require('../utils/tradeLogic');

let balance = 10000;
let shares = 0;
let profitLoss = 0;

const monitorStock = async (req, res) => {
  const currentPrice = await stockService.getStockPrice();
  const previousPrice = req.body.previousPrice;

  const action = checkTrade(currentPrice, previousPrice);
  await executeTrade(action, currentPrice, { balance, shares, profitLoss });

  res.json({
    action,
    currentPrice,
    balance,
    shares,
    profitLoss,
  });
};

const getSummary = async (req, res) => {
  const trades = await Trade.find();
  res.json({
    balance,
    shares,
    profitLoss,
    trades,
  });
};

module.exports = { monitorStock, getSummary };
