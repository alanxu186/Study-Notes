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
 * This is the maximum proffit
 * 
 * buyDay < sellDay
 */

var maxProfit = function(prices){

};