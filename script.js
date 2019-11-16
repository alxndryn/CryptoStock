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
function() {
    $.ajax({
      url: ,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#AppleDollarVal").text(response.price);
        $("#AppleMarketCap").text(response.cap);
        $("#AppleCryptoVal").text(response.cryptoValue);
    