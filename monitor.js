// need to use tjbot library
var TJBot = require('tjbot');

// IMPORTANT: install the node-fetch library in the terminal
// npm install --save node-fetch
// create variable set to fetch
const fetch = require('node-fetch');

// these are the hardware capabilities that TJ needs for this recipe
var hardware = ['led'];

// set up TJBot's configuration
var tjConfig = {
log: {
level: 'verbose'
}
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig);

// turn the LED off
tj.shine('off');var currentPrice;// fetching data for current real time price
fetch(`https://financialmodelingprep.com/api/v3/stock/real-time-price/IBM`)

// turn it into data we can consume
.then(res => { return res.json() })
.then(output => {

// grab the price for current real time
// as of now, data looks something like: {date: 2020-01-01, price: 321.11}
currentPrice = output.price;
return currentPrice;
});var closePrice;// fetch data for yday's closing price
fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/IBM?serietype=line`)

// turn it into data we can consume
.then(res => { return res.json() })
.then(output => {

// grab the price of the last closing price (yesterday's data)
closePrice = output.historical[output.historical.length - 1].close;
return closePrice;
});const monitorPriceDiff = () => {
var priceDiff = currentPrice - closePrice; try {
if (priceDiff > 0) {
tj.pulse('green', 1.5);
} else if (priceDiff < 0) {
tj.pulse('red', 0.5);
tj.pulse('red', 0.5);
tj.pulse('red', 0.5);
} else {
tj.pulse('yellow', 0.5);
tj.pulse('yellow', 0.5);
tj.pulse('yellow', 0.5);
}
} catch (err) {
console.log('ERROR', err);
} finally {
setTimeout(monitorPriceDiff, 3000);
}
};monitorPriceDiff();
