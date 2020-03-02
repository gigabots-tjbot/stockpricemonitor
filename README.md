# Stock Price Monitor
Stock monitoring recipe for TJBot with LED light support based on the fluctuations in price. This recipe utlizes the [8mm NeoPixel RGB LED](adafruit.com/product/1734) to shine for positive and negative reactions, as well as the [Financial Modeling Prep API](financialmodelingprep.com/developer/docs#Stock-Historical-Price)
>Contributed by the Gigabots team: Spark Park, Jatejah Phillips, Joseph Burford, Reagan Porter, and Jon Nguyen.

# Hardware
This recipe requires a TJBot with a [8mm NeoPixel RGB LED](adafruit.com/product/1734). 

# Use Cases
![](https://i.imgur.com/p7hJhGc.png)

# Build and Run
Install Dependencies

`npm install`


`##try 'sudo rm -rf node_modules' and 'sudo npm install --unsafeperm' if you run into errors installing dependencies`

Run!

`sudo node pricemonitor.js`
>Note the `sudo` command. Root user access is required to run TJBot recipes.

Now, your TJBot should deactivate the LED (in case it was already running beforehand), fetch yesterday's closing price, and shine the LED based on the price differential for today.

# Features
- Real(ish) time updates
- Easy to change which stock you'd like to monitor.
- Multiple LED colors.

# Future Features
- Voice Responsiveness
- Monitor multiple stocks.
- Custom color palettes and/or striplight integration.
- Push emergency notifications.

# License
This project is licensed under Apache 2.0. Full license is available in [LICENSE](https://github.com/gigabots-tjbot/stockpricemonitor/blob/master/LICENSE).

# Contributing

See [CONTRIBUTING.md](https://github.com/gigabots-tjbot/stockpricemonitor/blob/master/CONTRIBUTING.md).
