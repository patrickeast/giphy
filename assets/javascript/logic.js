// API KEY = kP5Rfl1iakIqhhB6Zqtlndtr4azKZ3s2

var topics = [
    "Yellowcard",
    "New Found Glory",
    "The Ataris",
    "Boys Like Girls",
    "My Chemical Romance",
    "American Hi-Fi",
    "Taking Back Sunday",
    "Cute is What We Aim For",
    "The Academy Is...",
    "Motion City Soundtrack"
];
$("searchBtn").on("click", function () {
    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.attr("class", "newBtn");
        topics[i].append(newButton);
    };
});

// $("searchBtn").on("click", function () {
//     var topics = $(".form-control").attr("data", "object");
//     var newButton = $("<button>");
//     newButton.attr("class", "newBtn");
//     topics[i].append(newButton);
// })