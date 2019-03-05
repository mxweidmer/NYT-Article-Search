

var startYear;
var endYear;

var searchTerm;
var queryURL;
var beginDate;
var endDate;
var recordNum;

$("#search").on("click", function () {

    var searchTerm = $("#searchTerm").val();

    startYear = parseInt($("#startYear").val());

    endYear = parseInt($("#endYear").val());

    if ((startYear > 1960) && (startYear < 2020)) {
        beginDate = "&begin_date=" + startYear + "0101";
    } else {
        beginDate = "";
    }

    if ((endYear > 1960) && (endYear < 2020) && (endYear > startYear)) {
        endDate = "&end_date=" + endYear + "1231";
    } else {
        endDate = "";
    }

    recordNum = parseInt($('#inputGroupSelect01 option:selected').val());

    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + beginDate + endDate + "&api-key=5rQbNRg31B5QOgvxIM8sjGNjQvsAIizt";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(queryURL);

        var results = response.response.docs;

        for (var i = 0; i < recordNum; i++) {
            var articleTitle = results[i].headline.main;
            var articleAuthor = results[i].byline.original;
            var section = results[i].section_name;
            var date = results[i].pub_date;
            var articleLink = results[i].web_url;

            console.log(articleTitle);
            console.log(articleAuthor);
            console.log(section);
            console.log(date);
            console.log(articleLink);
        }

    });
});

$("#clear").on("click", function () {
});