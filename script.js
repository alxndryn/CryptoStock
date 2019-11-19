var querySymbol = "AAPL";
var getPrice = document.querySelector(".red");

function cryptoConvert(q, r) {
    newPrice = q / r;
    prependous(compName);
}

$(getPrice).on("click", function () {
    querySymbol = $(document.querySelector("#search")).val();
    var AVurl = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + querySymbol + "&apikey=8R49FW9VLKSNE9JK";
    $.ajax({
        url: AVurl,
        method: "GET"
    }).then(function (response) {
        stockPrice = response["Global Quote"]["05. price"];
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



function prependous(name) {
    var newElement = $("<tr>");
    let rowSymbol = $("<td>").text(querySymbol);
    $("tbody").prepend(newElement);
    $(newElement).append($("<td>").text(name));
    $(newElement).append(rowSymbol);
    $(newElement).append($("<td>").text("$" + stockPrice));
    $(newElement).append($("<td>").text(newPrice));
}

// api keys: DE8538D9-7264-4490-90FD-0ABB4E2B1908  C0947395-C774-4C99-9908-9B82CB91E1F6