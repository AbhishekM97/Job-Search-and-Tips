$(document).ready(function() {

    // Variables to refer to stored Wikipedia API results
    var title = sessionStorage.getItem("title");
    var snippet = sessionStorage.getItem("snippet");
    // var snippet = sessionStorage.getItem("text");
    var link = sessionStorage.getItem("link");

    // Conditional so that nothing shows up unless an API call has been made
    if (title) {
    
        // Dynamically creating the elements for the Wikipedia API results
        var wikiDiv = $("<div>");
        wikiDiv.addClass("wiki-container");
        var p1 = $("<h3>").html(title);
        var p2 = $("<p>").html(snippet);
        var p3 = $("<br>");
        var p4 = $("<a>Click here for more information</a>");
        p4.addClass("wiki-url")
        p4.addClass("orange-text text-darken-4")
        p4.attr("href", link);
        p4.attr("target", "_blank")
    
        // Appending all elements to the wikiDiv
        // $(".wiki-url").show();
        wikiDiv.append(p1);
        wikiDiv.append(p2);
        wikiDiv.append(p3);
        // wikiDiv.append(p4);

        // Displaying the Wikipedia results
        $("#wikipedia-results").append(wikiDiv);
        $("#wiki-link").append(p4);

    }
});