/* 1. Grab the input value */
document.querySelector(".js-go").addEventListener('click', function (e) {
    // console.log(e)
    var input = document.querySelector("input").value;

    searchGiphy(input);
});
document.querySelector(".js-userinput").addEventListener('keyup', function (e) {
    // console.log(e);
    // var input = document.querySelector("input").value;

    // if the key ENTER is pressed...
    if (e.which === 13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
    }

});
function getUserInput() {
    var inputValue = document.querySelector('.js-userinput').value;

    return inputValue;
}

function searchGiphy(searchQuery) {
    /* 2. do the data stuff with the API */
    var url = "https://g.tenor.com/v1/search?key=LIVDSRZULELA&limit=25"+"&q=" + searchQuery;
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function (data) {
        var actualdata = data.target.response;

        pushToDOM(actualdata);
        console.log(actualdata);
    });
}
/* 3. Show me the GIFs */
function pushToDOM(response) {
    var response1 = JSON.parse(response);
    console.log(response1);
    var images = response1.results;
    var container = document.querySelector(".js-container");
    container.innerHTML = "";
    images.forEach(function (image) {
        var src = image.media[0].gif.url;
        // var container = document.querySelector(".js-container");
        container.innerHTML = container.innerHTML + "<img src=\"" + src + "\" class=\"container-image\">";
    });

}


