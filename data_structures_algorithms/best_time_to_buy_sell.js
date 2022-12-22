// You are given an integer array prices where prices[i] is the price of a given stock on the i^th day.
// On each day, you may decide to buy/sell the stock. You can hold at most one share of the stock at any time. However you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * prices = [7,1,5,3,6,4]
 *             |     |
 *            buy   sell
 * 
 * buyDay = 1
 * buyPrice=prices[buyDay] = 1
 * 
 * sellDay = 4
 * sellPrice = price[sellDay] = 6
 * 
 * profit = sellPrice - buyPrice = 6 - 1 = 5 
 * This is the maximum profit
 * 
 * buyDay < sellDay
 */

var maxProfit = function(prices){
    let minBuyPrice = prices[0]; //initial buy price
    let maxProfit = 0; //initial profit made
    for (i = 1; i < prices.length; i++) //i must start at one because you must buy before selling
    {
        let sellPrice = prices[i]; //sellPrice equals value of prices[i] 
        let profit = sellPrice - minBuyPrice; 
        maxProfit = Math.max(maxProfit, profit) //compare profits
        minBuyPrice = Math.min(minBuyPrice, prices[i])//compare which is price is lower
    }
    return maxProfit
};

// Time complexity: linear, only running one for loop
// Space complexity: constant, not creating a new array 