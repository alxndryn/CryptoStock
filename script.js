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

//Call for Apple stock display
function AppleCall() {
var querySymbol = "AAPL";
var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
$.ajax({
    url: AVurl,
    method: "GET"
})
.then(function(response){
    console.log(response);
    var stockPrice = response["Global Quote"]["05. price"];
    var stockVolume = response["Global Quote"]["06. volume"];
    ApplePrice.text("$" + stockPrice);
    AppleVolume.text(stockVolume + " " + "Shares Today");

$.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
        method: "GET"
})
.then(function(response){
    console.log(response);
    var convRate = response.rate;
    var newPrice = stockPrice / convRate;
    AppleCrypto.text("₿" + newPrice);

    });
})}
    
AppleCall();

//Call for Microsoft info
function MicrosoftCall() {
    var querySymbol = "MSFT";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        var stockPrice = response["Global Quote"]["05. price"];
        var stockVolume = response["Global Quote"]["06. volume"];
        MicrosoftPrice.text("$" + stockPrice);
        MicrosoftVolume.text(stockVolume + " " + "Shares Today");
    
    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        var convRate = response.rate;
        var newPrice = stockPrice / convRate;
        MicrosoftCrypto.text("₿" + newPrice);

        });
    })}
        
    MicrosoftCall();

//Call for Amazon info
function AmazonCall() {
    var querySymbol = "AMZN";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        var stockPrice = response["Global Quote"]["05. price"];
        var stockVolume = response["Global Quote"]["06. volume"];
        AmazonPrice.text("$" + stockPrice);
        AmazonVolume.text(stockVolume + " " + "Shares Today");
    
    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        var convRate = response.rate;
        var newPrice = stockPrice / convRate;
        AmazonCrypto.text("₿" + newPrice);

        });
    })}
        
    AmazonCall();

//Call for Google info
function GoogleCall() {
var querySymbol = "GOOGL";
var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
$.ajax({
    url: AVurl,
    method: "GET"
})
.then(function(response){
    var stockPrice = response["Global Quote"]["05. price"];
    var stockVolume = response["Global Quote"]["06. volume"];
    GooglePrice.text("$" + stockPrice);
    GoogleVolume.text(stockVolume + " " + "Shares Today");

$.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
        method: "GET"
})
.then(function(response){
    var convRate = response.rate;
    var newPrice = stockPrice / convRate;
    GoogleCrypto.text("₿" + newPrice);

    });
})}
    
GoogleCall();

//Call for Facebook info
function FacebookCall() {
    var querySymbol = "FB";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        var stockPrice = response["Global Quote"]["05. price"];
        var stockVolume = response["Global Quote"]["06. volume"];
        FacebookPrice.text("$" + stockPrice);
        FacebookVolume.text(stockVolume + " " + "Shares Today");
    
    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        var convRate = response.rate;
        var newPrice = stockPrice / convRate;
        FacebookCrypto.text("₿" + newPrice);

        });
    })}
        
    FacebookCall();

//Variable that grabs the search button
var searchBtn = $(".red");
//Function that handles the onclick search button
$(searchBtn).on("click", function () {
    querySymbol = $(document.querySelector("#search")).val();
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        stockPrice = response["Global Quote"]["05. price"];
        searchVol = response["Global Quote"]["06. volume"];
        $.ajax({
            url: "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK",
            method: "GET"
        }).then(function (response) {
            compName = response.bestMatches["0"]["2. name"];
            $.ajax({
                url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
                method: "GET"
            }).then(function (response) {
                convRate = response.rate;
                cryptoConvert(stockPrice, convRate)
            });
        })
    });
});

//Function that adds the values to the page from the search
function prependous(name) {
    var newElement = $("<tr>");
    let rowSymbol = $("<td>").text(querySymbol);
    $("tbody").prepend(newElement);
    $(newElement).append($("<td>").text(name));
    $(newElement).append(rowSymbol);
    $(newElement).append($("<td>").text("$" + stockPrice));
    $(newElement).append($("<td>").text(searchVol + " " + "Shares Today"));
    $(newElement).append($("<td>").text("₿" + newPrice));
}

//Funciton that converts the current price of the stock to Bitcoin
function cryptoConvert(q, r) {
    newPrice = q / r;
    console.log(newPrice);
    prependous(compName);
}
 
