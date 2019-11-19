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
    const stockPrice = response["Global Quote"]["05. price"];
    var stockVolume = response["Global Quote"]["06. volume"];
    ApplePrice.text(stockPrice);
    AppleVolume.text(stockVolume);
})
$.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=DE8538D9-7264-4490-90FD-0ABB4E2B1908",
        method: "GET"
    })
.then(function(response){
        convRate = response.rate;
        function cryptoConvert() {
    var newPrice = stockPrice / convRate;
    console.log(newPrice);
    AppleCrypto.text(newPrice);
    cryptoConvert();
        }})}
AppleCall();



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
    MicrosoftPrice.text(stockPrice);
    MicrosoftVolume.text(stockVolume);
})};
MicrosoftCall();  

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
    AmazonPrice.text(stockPrice);
    AmazonVolume.text(stockVolume);
})};
AmazonCall();

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
    GooglePrice.text(stockPrice);
    GoogleVolume.text(stockVolume);
})};
GoogleCall();

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
    FacebookPrice.text(stockPrice);
    FacebookVolume.text(stockVolume);
})};
FacebookCall();