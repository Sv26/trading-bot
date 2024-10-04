

# Trading Bot Backend Application

A backend application built with Node.js and MongoDB that simulates a basic trading bot for a hypothetical stock market. The bot executes trades based on predefined rules and conditions, while tracking its profit/loss and performance metrics.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Trading Logic](#trading-logic)
- [Project Structure](#project-structure)
- [Notes](#notes)
- [License](#license)

## Features

- Continuously monitors mock stock price changes.
- Implements a basic trading strategy based on market movements.
- Tracks positions, balance, and overall profit/loss.
- Provides a summary report of trades and profit/loss statement.
- Uses MongoDB for persistent data storage.

## Requirements

- **Node.js** (v12 or higher)
- **npm**
- **MongoDB** (local instance or MongoDB Atlas)

## Installation

1. **Clone the repository**

   ```bash
   
   cd trading-bot
Install dependencies


npm install
Configuration
Set up Environment Variables

Create a .env file in the root directory and add the following variables:

## env
MONGO_URI: Your MongoDB connection string.
STOCK_API_URL: The mock API endpoint for fetching stock prices.
PORT: Port number for the Express server.
Ensure MongoDB is Running

If using a local MongoDB instance, make sure it's running.
If using MongoDB Atlas, update MONGO_URI with your connection string.
Usage
Start the Application

bash

node src/app.js
Testing the Endpoints

Use an API client like Postman or curl to interact with the API.

Monitor Stock and Execute Trades

http

POST /trade
Request Body (JSON):

json

{
  "previousPrice": 100
}
Get Summary Report

http

GET /summary
API Endpoints
POST /trade
Monitors the stock price and executes trades based on the trading logic.

## Request Body Parameters:

previousPrice (number): The last known stock price.
Response:

action: The action taken (buy, sell, or hold).
currentPrice: The current stock price fetched from the mock API.
balance: Current balance after the trade.
shares: Number of shares held.
profitLoss: Current profit or loss.
GET /summary
Provides a summary report showing the trades made and the final profit/loss statement.

## Response:

balance: Current balance.
shares: Number of shares held.
profitLoss: Total profit or loss.
trades: Array of trade objects with action, price, and time.
Trading Logic
The trading bot uses a simple percentage-based strategy:

Buy when the current stock price drops by 2% compared to the previous price.
Sell when the current stock price rises by 3% compared to the previous price.
Hold otherwise.

## Example Function:

javascript

const checkTrade = (currentPrice, previousPrice) => {
  if (currentPrice <= previousPrice * 0.98) {
    return 'buy';
  } else if (currentPrice >= previousPrice * 1.03) {
    return 'sell';
  }
  return 'hold';
};
