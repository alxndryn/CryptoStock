var ApplePrice = $("#AppleDollarVal");
var AppleMarketCap = $("#AppleMarketCap");
var AppleCrypto = $("#AppleCryptoVal");
var MicrosoftPrice = $("#MicrosoftDollarVal");
var MicrosoftMarketCap = $("#MicrosoftMarketCap");
var MicrosoftCrypto = $("#MicrosoftCryptoVal");
var AmazonPrice = $("#AmazonDollarVal");
var AmazonMarketCap = $("#AmazonMarketCap");
var AmazonCrypto = $("#AmazonCryptoVal");
var GooglePrice = $("#GoogleDollarVal");
var GoogleMarketCap = $("#GoogleMarketCap");
var GoogleCrypto = $("#GoogleCryptoVal");
var FacebookPrice = $("#FacebookDollarVal");
var FacebookMarketCap = $("#FacebookMarketCap");
var FacebookCrypto = $("#FacebookCryptoVal");
var cryptoValue = 
//Apple Call And Append
function AppleDisplay() {
    var querySymbol = "AAPL";
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    }).then(function(response){
        stockPrice = response["Global Quote"]["05. price"];
    });
    $.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=DE8538D9-7264-4490-90FD-0ABB4E2B1908",
        method: "GET"
    }).then(function(response){
        convRate = response.rate;
        cryptoConvert();
    });

    .then(function(response) {
        console.log(response);
        $("#AppleDollarVal").text(stockPrice);
        $("#AppleMarketCap").text(response.cap);
        $("#AppleCryptoVal").text(response.cryptoValue);
    

function cryptoConvert() {
    newPrice = stockPrice / convRate;
    console.log(newPrice);
    AppleDisplay();