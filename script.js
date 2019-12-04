//Variables for adding the retrieved values to the page
var ApplePrice = $("#AppleDollarVal");
var AppleVolume = $("#AppleVolume");
var AppleCrypto = $("#AppleCryptoVal");
var MicrosoftPrice = $("#MicrosoftDollarVal");
var MicrosoftVolume = $("#MicrosoftVolume");
var MicrosoftCrypto = $("#MicrosoftCryptoVal");
var AmazonPrice = $("#AmazonDollarVal");
var AmazonVolume = $("#AmazonVolume");
var AmazonCrypto = $("#AmazonCryptoVal");
var GooglePrice = $("#GoogleDollarVal");
var GoogleVolume = $("#GoogleVolume");
var GoogleCrypto = $("#GoogleCryptoVal");
var FacebookPrice = $("#FacebookDollarVal");
var FacebookVolume = $("#FacebookVolume");
var FacebookCrypto = $("#FacebookCryptoVal");

//Due to the limit of API call that we are allowed to make per minute
//We have created an array of API keys that are pulled from randomly
//This allows us to be able to keep the site functioning
//Arrays that hold the API Keys
var alphaAPI = ["8R49FW9VLKSNE9JK", "D7BDX98JEX4CMDGY", "7YQ6SGFLSAWG2PNY", "R1HO6T0SA0NNCUFX"]
var coinAPI = "07F65B44-D679-49BE-A904-29C91146DDE0";

//Function for looping through the API keys
function randomAlpha(alphaAPI){ 
    return alphaAPI[Math.floor(Math.random() * alphaAPI.length)];
};

//Call for Amazon info
function AmazonCall() {
    var querySymbol = "AMZN";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    })
        .then(function (response) {
            var stockPrice = response["Global Quote"]["05. price"];
            var stockVolume = response["Global Quote"]["06. volume"];
            AmazonPrice.text("$" + stockPrice);
            AmazonVolume.text(stockVolume + " " + "Shares Today");

            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                method: "GET"
            })
                .then(function (response) {
                    var convRate = response.rate;
                    var newPrice = stockPrice / convRate;
                    AmazonCrypto.text("₿" + newPrice);

                });
        })
}

AmazonCall();

//Call for Apple info
function AppleCall() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    })
        .then(function (response) {
            var stockPrice = response["Global Quote"]["05. price"];
            var stockVolume = response["Global Quote"]["06. volume"];
            ApplePrice.text("$" + stockPrice);
            AppleVolume.text(stockVolume + " " + "Shares Today");

            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                method: "GET"
            })
                .then(function (response) {
                    var convRate = response.rate;
                    var newPrice = stockPrice / convRate;
                    AppleCrypto.text("₿" + newPrice);

                });
        })
}

AppleCall();

//Call for Microsoft info
function MicrosoftCall() {
    var querySymbol = "MSFT";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    })
        .then(function (response) {
            var stockPrice = response["Global Quote"]["05. price"];
            var stockVolume = response["Global Quote"]["06. volume"];
            MicrosoftPrice.text("$" + stockPrice);
            MicrosoftVolume.text(stockVolume + " " + "Shares Today");

            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                method: "GET"
            })
                .then(function (response) {
                    var convRate = response.rate;
                    var newPrice = stockPrice / convRate;
                    MicrosoftCrypto.text("₿" + newPrice);

                });
        })
}

MicrosoftCall();

//Call for Google info
function GoogleCall() {
    var querySymbol = "GOOGL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    })
        .then(function (response) {
            var stockPrice = response["Global Quote"]["05. price"];
            var stockVolume = response["Global Quote"]["06. volume"];
            GooglePrice.text("$" + stockPrice);
            GoogleVolume.text(stockVolume + " " + "Shares Today");

            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                method: "GET"
            })
                .then(function (response) {
                    var convRate = response.rate;
                    var newPrice = stockPrice / convRate;
                    GoogleCrypto.text("₿" + newPrice);

                });
        })
}

GoogleCall();

//Call for Facebook info
function FacebookCall() {
    var querySymbol = "FB";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    })
        .then(function (response) {
            var stockPrice = response["Global Quote"]["05. price"];
            var stockVolume = response["Global Quote"]["06. volume"];
            FacebookPrice.text("$" + stockPrice);
            FacebookVolume.text(stockVolume + " " + "Shares Today");

            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                method: "GET"
            })
                .then(function (response) {
                    var convRate = response.rate;
                    var newPrice = stockPrice / convRate;
                    FacebookCrypto.text("₿" + newPrice);

                });
        })
}

FacebookCall();



//Variable that grabs the search button
var searchBtn = $("#searchBtn");
//Function that handles the onclick search button
$(searchBtn).on("click", function () {
    querySymbol = $(document.querySelector("#search")).val();
    var AVurl = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`;
    $.ajax({
        url: AVurl,
        method: "GET"
    }).then(function (response) {

        // if the user searches for a ticker symbol, then the site will search for values.
        // else, the site will take the input, convert it into a symbol, and THEN search.


        if (response.bestMatches["0"]["1. symbol"] === querySymbol) {
            butt = 1;
            compName = response.bestMatches["0"]["2. name"];
            $.ajax({
                url: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + `&apikey= ${randomAlpha(alphaAPI)}`,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                stockPrice = response["Global Quote"]["05. price"];
                searchVol = response["Global Quote"]["06. volume"];
                $.ajax({
                    url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                    method: "GET"
                }).then(function (response) {
                    convRate = response.rate;
                    cryptoConvert(stockPrice, convRate)
                });
            });

        }
        else {
            butt = 2;
            compName = response.bestMatches["0"]["2. name"];
            stuff = response.bestMatches["0"]["1. symbol"];
            var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stuff + `&apikey= ${randomAlpha(alphaAPI)}`;
            $.ajax({
                url: AVurl,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                stockPrice = response["Global Quote"]["05. price"];
                searchVol = response["Global Quote"]["06. volume"];
                $.ajax({
                    url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?" + "&apikey=" + coinAPI,
                    method: "GET"
                }).then(function (response) {
                    convRate = response.rate;
                    cryptoConvert(stockPrice, convRate)
                });
            });
        }
            });
});

//Function that adds the values to the page from the search
function prependous(name) {
    var newElement = $("<tr>");
    $("tbody").prepend(newElement);
    $(newElement).append($("<td>").text(name));

    // if the user input a ticker symbol, the function will append that to the table.
    // else, if the user input a name, the function will append that company's symbol
    // as found by the initial lookup.

    if (butt === 1) {
        $(newElement).append($("<td>").text(querySymbol));
    }
    else {
        $(newElement).append($("<td>").text(stuff));
    }
    $(newElement).append($("<td>").text("$" + stockPrice));
    $(newElement).append($("<td>").text(searchVol + " " + "Shares Today"));
    $(newElement).append($("<td>").text("₿" + newPrice));
}

//Function that converts the current price of the stock to Bitcoin
function cryptoConvert(q, r) {
    newPrice = q / r;
    console.log(newPrice);
    prependous(compName);
}