var bands = [
    "Ocean Avenue",
    "Adam's Song",
    "Sweet Caroline"
];

function showStillGiphy() {
    var bandSearch = $(this).attr("data-name");
    var tag = "bands";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandSearch + "&tag=" + tag + "&api_key=kP5Rfl1iakIqhhB6Zqtlndtr4azKZ3s2&limit=4";


    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        // console.log(response);
        // console.log(queryURL);

        for (var i = 0; i < response.data.length; i++) {
            console.log(response);
            var bandDisplay = $("<span>");
            var stillImage = response.data[i].images.fixed_height_still.url;
            var gifImage = response.data[i].images.fixed_height.url;


            var result = $("<img>").attr({
                src: stillImage,
                stillImage: stillImage,
                animateImage: gifImage,
                datastate: "still",
                class: "gif"
            })
            var title = response.data[i].title;
            var pOne = $("<p>").text("Title: " + title);
            bandDisplay.html(result);
          
            $("#giphyContainer").append(bandDisplay);
            $("#giphyContainer").append(pOne);

        }

        function showAnimateGiphy() {
            var state = $(this).attr("datastate");

            if (state === "still") {
                $(this).attr("src", $(this).attr("animateImage")),
                    $(this).attr("datastate", "animate");
            }

            else if (state === "animate") {
                $(this).attr("src", $(this).attr("stillImage")),
                    $(this).attr("datastate", "still");
            }
        }
        $(document).on("click", ".gif", showAnimateGiphy);
    });
}


function makeButtons() {

    $("#buttonContainer").empty();

    for (var i = 0; i < bands.length; i++) {
        var newButton = $("<button>");
        newButton
            .addClass("newBtn")
            .addClass("btn btn-danger")
            .attr("data-name", bands[i])
            .text(bands[i]);
        $("#buttonContainer").append(newButton);
    };
}

$("#searchBtn").on("click", function (event) {

    event.preventDefault();

    var topic = $("#topic-input").val().trim();

    bands.push(topic);
    console.log(topic);

    $("#topic-input").val("");

    makeButtons();
});

$(document).on("click", ".newBtn", showStillGiphy);

makeButtons();