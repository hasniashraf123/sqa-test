const cryptoData = {
    currencies: [
      {
        logo_png: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
        logo_svg: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg",
        name: "BNB",
        symbol: "BNB",
        price: 317.4,
        "24h_change": "0.76%",
        market_cap: "50117M",
      },
      {
        logo_png: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        logo_svg: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
        name: "Bitcoin",
        symbol: "BTC",
        price: 24727,
        "24h_change": "-0.56%",
        market_cap: "477153M",
      },
      {
        logo_png: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        logo_svg: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
        name: "Ethereum",
        symbol: "ETH",
        price: 1707,
        "24h_change": "0.84%",
        market_cap: "208946M",
      },
      {
        logo_png: "https://cryptologos.cc/logos/tether-usdt-logo.png",
        logo_svg: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
        name: "Tether",
        symbol: "USDT",
        price: 1.01,
        "24h_change": "0.01%",
        market_cap: "23127M",
      },
      {
        logo_png: "https://cryptologos.cc/logos/dock-dock-logo.png",
        logo_svg: "https://cryptologos.cc/logos/dock-dock-logo.svg",
        name: "Dock",
        symbol: "DOCK",
        price: 0.4611,
        "24h_change": "-0.99%",
        market_cap: "277M",
      },
    ],
  };
  
  describe("Crypto Data", () => {
    test("Should have an array of currencies", () => {
      expect(cryptoData.currencies).toBeInstanceOf(Array);
      expect(cryptoData.currencies.length).toBeGreaterThan(0);
    });
  
    test("Each currency should have specific properties", () => {
      cryptoData.currencies.forEach((currency) => {
        expect(currency).toHaveProperty("logo_png");
        expect(currency).toHaveProperty("logo_svg");
        expect(currency).toHaveProperty("name");
        expect(currency).toHaveProperty("symbol");
        expect(currency).toHaveProperty("price");
        expect(currency).toHaveProperty("24h_change");
        expect(currency).toHaveProperty("market_cap");
      });
    });
  
    test("Price of each currency should be a number", () => {
      cryptoData.currencies.forEach((currency) => {
        expect(typeof currency.price).toBe("number");
      });
    });
  
    test("Market cap of each currency should be a string", () => {
      cryptoData.currencies.forEach((currency) => {
        expect(typeof currency.market_cap).toBe("string");
      });
    });

    test("URLs of logo_png and logo_svg should be valid", () => {
        cryptoData.currencies.forEach((currency) => {
          expect(currency.logo_png).toMatch(/^https:\/\/.*\.png$/);
          expect(currency.logo_svg).toMatch(/^https:\/\/.*\.svg$/);
        });
      });
    
    test("Symbol of each currency should be a string", () => {
        cryptoData.currencies.forEach((currency) => {
          expect(typeof currency.symbol).toBe("string");
        });
      });
    
    test("24h_change of each currency should be a string ending with '%'", () => {
        cryptoData.currencies.forEach((currency) => {
          expect(typeof currency["24h_change"]).toBe("string");
          expect(currency["24h_change"].endsWith("%")).toBe(true);
        });


    })
  });