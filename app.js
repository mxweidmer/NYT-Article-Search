


var startYear;
var endYear;

var searchTerm;
var queryURL;
var beginDate;
var endDate;

$("#search").on("click", function () {

    var searchTerm = $("#searchTerm").val();

    startYear = parseInt($("#startYear").val());

    endYear = parseInt($("#endYear").val());

    if ((startYear > 1960) && (startYear < 2020)) {
        beginDate = startYear + "0101";
    } else {
        beginDate = "";
    }

    if ((endYear > 1960) && (endYear < 2020) && (endYear > startYear)) {
        endDate = endYear + "1231";
    } else {
        elseDate = "";
    }


    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=5rQbNRg31B5QOgvxIM8sjGNjQvsAIizt";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(queryURL);

        var results = response.response.docs;

        console.log(results);

        var articleTitle = results[0].headline.main;
        var articleAuthor = results[0].byline.original;
        var section = results[0].section_name;
        var date = results[0].pub_date;
        var articleLink = results[0].web_url;

        console.log(articleTitle);
        console.log(articleAuthor);
        console.log(section);
        console.log(date);
        console.log(articleLink);
    });
});






$("#clear").on("click", function () {
    console.log("a thing");
});