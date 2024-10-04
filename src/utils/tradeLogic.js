const Trade = require('../services/tradeService');

const checkTrade = (currentPrice, previousPrice) => {
  if (currentPrice <= previousPrice * 0.98) {
    return 'buy';
  } else if (currentPrice >= previousPrice * 1.03) {
    return 'sell';
  }
  return 'hold';
};

const executeTrade = async (action, price, { balance, shares, profitLoss }) => {
  if (action === 'buy' && balance >= price) {
    shares += 1;
    balance -= price;
    await Trade.create({ action: 'buy', price });
  } else if (action === 'sell' && shares > 0) {
    shares -= 1;
    balance += price;
    profitLoss = balance - 10000;
    await Trade.create({ action: 'sell', price });
  }
};

module.exports = { checkTrade, executeTrade };
