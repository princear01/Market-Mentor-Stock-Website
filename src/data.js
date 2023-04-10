const data = {
    basicvocab:[
    {
        term: "Stock",
        definition:
        "A share in the ownership of a company, which represents a claim on the company's assets and earnings.",
    },
    {
        term: "Share",
        definition:
        "A unit of ownership in a company, which entitles the shareholder to a portion of the company's assets and earnings.",
    },
    {
        term: "Dividend",
        definition:
        "A distribution of a portion of a company's earnings to its shareholders, typically in the form of cash or additional shares.",
    },
    {
        term: "Market",
        definition:
        "The exchange of goods and services between buyers and sellers, typically organized around a physical or virtual location.",
    },
    {
        term: "Trader",
        definition:
        "An individual or entity that buys and sells securities or other financial instruments in order to profit from fluctuations in their prices.",
    },
    {
        term: "Portfolio",
        definition:
        "A collection of financial assets such as stocks, bonds, and cash held by an individual or institution.",
    },
    {
        term: "Volatility",
        definition:
        "A measure of how much the price of a security or financial instrument fluctuates over time, typically calculated as the standard deviation of its historical returns.",
    },
    {
        term: "Diversification",
        definition:
        "The practice of spreading investment funds across different types of assets and securities in order to reduce risk and maximize return.",
    },
    {
        term: "Index",
        definition:
        "A benchmark that measures the performance of a specific group of securities or financial instruments, often used to track the performance of a particular market or industry sector.",
    },
    {
        term: "Capital",
        definition:
        "The funds or financial assets used to invest in a business or other venture, often used to describe the total value of a company's assets minus its liabilities.",
    },
    {
        term: "Broker",
        definition:
        "A broker is a person or firm that buys and sells stocks on behalf of investors. They earn a commission for each trade they make.",
    },
    {
        term: "Bull Market",
        definition:
        "A bull market is a period of time when stock prices are rising and investors are optimistic about the market's future.",
    },
    {
        term: "Bear Market",
        definition:
        " A bear market is a period of time when stock prices are falling and investors are pessimistic about the market's future.",
    },
    {
        term: "Equity",
        definition:
        "Equity is another word for ownership. In the stock market, equity refers to the value of a company's assets minus its liabilities.",
    },
    {
        term: "Shareholder",
        definition:
        "Equity is another word for ownership. In the stock market, equity refers to the value of a company's assets minus its liabilities.",
    },
    ],
    medvocab:[
    {
        term: "Alpha",
        definition: 
        "A measure of the excess returns earned by a portfolio compared to its expected returns, based on the portfolio's beta and the performance of the overall market.",
    },
    {
        term: "Beta",
        definition:
        "A Stock Beta is the measure of the stock's volatility in relation to the overall market.",
    },
    {
        term: "Initial Public Offering (IPO)",
        definition:
        "The process of a company going public and offering shares to the public for the first time.",
    },
    {
        term: "Stock Option",
        definition:
        "A contract that gives the holder the right to buy or sell a stock at a certain price before a certain date",
    },
    {
        term: "Insider Trading",
        definition:
        "The buying or selling of a company's stock by someone with inside information.",
    },
    {
        term: "Price-Earnings Ratio (P/E Ratio)",
        definition: 
        "A valuation ratio that compares a company's stock price to its earnings per share.",
    },
    {
        term: "Market Capitalization (Market Cap)",
        definition: 
        "The total value of a company's outstanding shares of stock, calculated by multiplying the current stock price by the number of outstanding shares.",
    },
    {
        term: "Market Order",
        definition: 
        "An order to buy or sell a security at the best available price at the time the order is executed.",
    },
    {
        term: "Limit Order",
        definition: 
        "An order to buy or sell a security at a specified price or better.",
    },
    {
        term: "Market Index",
        definition: "A measure of the performance of a group of stocks that represent a particular market or sector."
    },
    {
        term: "Short Selling",
        definition: "The sale of a security that the seller does not own, with the expectation of buying it back later at a lower price."
    },
    {
        term: "Exchange-Traded Fund (ETF)",
        definition: "A type of investment fund that trades on a stock exchange, and typically tracks an index or sector."
    },
    {
        term: "Volume",
        definition: "The number of shares of a security that are traded in a given period of time, often used as a measure of market liquidity."
    },
    {
        term: "Blue Chip Stock",
        definition: "A stock of a large, well-established and financially sound company that has a reputation for stability and reliability."
    },
    {
        term: "Dividend Yield",
        definition: "A measure of the return on investment in a stock, calculated by dividing the annual dividend by the stock price."
    },
    {
        term: "Stop-Loss Order",
        definition: "An order to buy or sell a security at a specified price or worse, designed to limit losses in case the price moves against the investor."
    }, 
    ],
    hardvocab:[
    {
        term: "Capital",
        definition:
        "The funds or financial assets used to invest in a business or other venture, often used to describe the total value of a company's assets minus its liabilities.",
    },
    ],

    exchanges: [
        {
            name: "NYSE",
            index: 841.42,
            change: 1.54,
          },
          {
            name: "NAS",
            index: 841.42,
            change: 1.54,
          },
          {
            name: "Euronext 100",
            index: 841.42,
            change: 1.54,
          },
          {
            name: "Shanghai",
            index: 841.42,
            change: 1.54,
          },
        ],
    stocks: [
        {
            name: "Uber",
            ticker: "UBR",
            bid: 128.5,
            ask: 129.0,
            sector: "Industry",
            change: 1.54,
            dividends: {
            2020: 20,
            2019: 19,
            2018: 18,
            2017: 15,
            2016: 13,
            2015: 10,
          
            },
            homepage: "https://google.com",
            investorpage: "https://google.com",
        },
        {
            name: "TESLA",
            ticker: "TSLA",
            bid: 128.5,
            ask: 129.0,
            sector: "Industry",
            change: 1.54,
            dividends: {
            2020: 23,
            2019: 5,
            2018: 18,
            2017: 15,
            2016: 13,
            2015: 10,
            },
            homepage: "https://google.com",
            investorpage: "https://google.com",   
        },
        {
            name: "COINBASE",
            ticker: "COIN",
            bid: 128.5,
            ask: 129.0,
            sector: "Industry",
            change: 1.54,
            dividends: {
            2020: 13,
            2019: 15,
            2018: 18,
            2017: 15,
            2016: 13,
            2015: 10,
            },
            homepage: "https://google.com",
            investorpage: "https://google.com",   
        },
        {
            name: "AMC",
            ticker: "AMC",
            bid: 128.5,
            ask: 129.0,
            sector: "Industry",
            change: 1.54,
            dividends: {
            2020: 2,
            2019: 3,
            2018: 18,
            2017: 15,
            2016: 13,
            2015: 10,
            },
            homepage: "https://google.com",
            investorpage: "https://google.com",  
        },
        {
            name: "BERKSHIRE HATHAWAY",
            ticker: "BRK.A",
            bid: 128.5,
            ask: 129.0,
            sector: "Industry",
            change: 1.54,
            dividends: {
            2020: 0.2,
            2019: 3,
            2018: 18,
            2017: 15,
            2016: 13,
            2015: 10,
            },
            homepage: "https://google.com",
            investorpage: "https://google.com",
        },
        ],

    quiz:[
        {
        topic: 'Javascript',
        level: 'Beginner',
        totalQuestions: 4,
        perQuestionScore: 5,
        questions: [
            {
            question:
                'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
            },
            {
            question:
                'Which of the following keywords is used to define a variable in Javascript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var and let',
            },
            {
            question:
                'Which of the following methods can be used to display data in some form using Javascript?',
            choices: [
                'document.write()',
                'console.log()',
                'window.alert',
                'All of the above',
            ],
            type: 'MCQs',
            correctAnswer: 'All of the above',
            },
            {
            question: 'How can a datatype be declared to be a constant type?',
            choices: ['const', 'var', 'let', 'constant'],
            type: 'MCQs',
            correctAnswer: 'const',
            },
        ],
},
    ],
    };
    
export default data
