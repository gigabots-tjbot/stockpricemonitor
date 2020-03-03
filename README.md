# Stock Price Monitor
![](https://i.imgur.com/giR5YYL.png)

Stock monitoring recipe for TJBot with LED light support based on the fluctuations in price. This recipe utlizes the [8mm NeoPixel RGB LED](adafruit.com/product/1734) to shine in response to positive and negative reactions, as well as the [Financial Modeling Prep API](financialmodelingprep.com/developer/docs#Stock-Historical-Price).
>Contributed by the Gigabots team: Spark Park, Jatejah Phillips, Joseph Burford, Reagan Porter, and Jon Nguyen.

# Prerequisites
This recipe requires a TJBot with a [8mm NeoPixel RGB LED](adafruit.com/product/1734). 

# Use Cases
![](https://i.imgur.com/p7hJhGc.png)

# Build and Run
1. Boot your Raspberry Pi and make sure it is connected to the network. There is an icon in the menu bar at the top of the screen for connecting to a WiFi network.
2. Open the Terminal
3. Update your Raspberry Pi's Operating System software.
```
sudo apt-get update
sudo apt-get -y dist-upgrade
```

>You'll need to run apt-get update first to update the repository cache. Otherwise, apt-get dist-upgrade will not work because it does not know there is a distribution upgrade.

>During the upgrade, if you are asked about replacing the lightdm.conf file with the package maintainers version, say "Y".

- Install Node.js

We have tested TJBot with Node.js version 10 for Raspbian (Buster)
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- Install Dependencies

```
npm install
##try 'sudo rm -rf node_modules' and 'sudo npm install --unsafeperm' if you run into errors installing dependencies
```

- Run!

`sudo node pricemonitor.js`
>Note the `sudo` command. Root user access is required to run this recipe.

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
