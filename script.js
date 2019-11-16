var querySymbol = "AAPL";

$(document).ready(function(){
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    }).then(function(response){
        console.log(response["Global Quote"]["05. price"]);
    });
    $.ajax({
        url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=DE8538D9-7264-4490-90FD-0ABB4E2B1908",
        method: "GET"
    }).then(function(response){
        console.log(response.rate);
    });
});