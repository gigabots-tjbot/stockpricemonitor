# Stock Price Monitor
>Stock monitoring recipe for TJBot with LED light support based on the fluctuations in price. This recipe utlizes the [8mm NeoPixel RGB LED](adafruit.com/product/1734) to shine for positive and negative reactions, as well as the [Financial Modeling Prep API](financialmodelingprep.com/developer/docs#Stock-Historical-Price)

# Hardware
This recipe requires a TJBot with a [8mm NeoPixel RGB LED](adafruit.com/product/1734). 

# Build and Run
Install Dependencies

`npm install

`##try 'sudo rm -rf node_modules' and 'sudo npm install --unsafeperm' if you run into errors installing dependencies`

Run!

`sudo node pricemonitor.js`
>Note the `sudo` command. Root user access is required to run TJBot recipes.

Now, your TJBot should deactivate the LED (in case it was already running beforehand), fetch yesterday's closing price, and shine the LED based on the price differential.
