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

function AppleCall() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
        stockVolume = response["Global Quote"]["06. volume"];
        ApplePrice.text(stockPrice);
        AppleVolume.text(stockVolume);

    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        convRate = response.rate;
        newPrice = stockPrice / convRate;
        AppleCrypto.text(newPrice);
        })
    })
}
AppleCall();

function MicrosoftCall() {
    var querySymbol = "MSFT";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
        stockVolume = response["Global Quote"]["06. volume"];
        MicrosoftPrice.text(stockPrice);
        MicrosoftVolume.text(stockVolume);

    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        convRate = response.rate;
        newPrice = stockPrice / convRate;
        MicrosoftCrypto.text(newPrice);
        })
    })
}
MicrosoftCall();

function AppleCall() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
        stockVolume = response["Global Quote"]["06. volume"];
        ApplePrice.text(stockPrice);
        AppleVolume.text(stockVolume);

    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        convRate = response.rate;
        newPrice = stockPrice / convRate;
        AppleCrypto.text(newPrice);
        })
    })
}
AppleCall();

function AppleCall() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
        stockVolume = response["Global Quote"]["06. volume"];
        ApplePrice.text(stockPrice);
        AppleVolume.text(stockVolume);

    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        convRate = response.rate;
        newPrice = stockPrice / convRate;
        AppleCrypto.text(newPrice);
        })
    })
}
AppleCall();

function AppleCall() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    })
    .then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
        stockVolume = response["Global Quote"]["06. volume"];
        ApplePrice.text(stockPrice);
        AppleVolume.text(stockVolume);

    $.ajax({
            url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=9F1B5FB4-A270-44EA-97F3-969AB45E6F08",
            method: "GET"
    })
    .then(function(response){
        convRate = response.rate;
        newPrice = stockPrice / convRate;
        AppleCrypto.text(newPrice);
        })
    })
}
AppleCall();





