(function () { 

var omdbAPI = "http://www.omdbapi.com"; 
var movieHTML = "";
        
$("#submit").click( function (evt) {
    
    evt.preventDefault();
    var searchstring = $("#search");
    var searchValue = searchstring.val();
    console.log(searchValue);

var data = {
    
    s: searchValue,
    plot: "full",
    type: "Movie",
    r: "json",
    page: "1",
    callback: ""
    
}; //end data

function callBack(movie) {

movieHTML = "";    
        
if (movie.Response === "True") {

    $.each(movie.Search, function (i, item) {

    movieHTML += '<li><div class="poster-wrap">';

    if (item.Poster === "N/A") {
                movieHTML += '<i class="material-icons poster-placeholder">crop_original</i></div>';

            } else {
                movieHTML += '<img class="movie-poster" src="' + item.Poster + '"></div>';
            }

            movieHTML += '<span class="movie-title">"' + item.Title + '"</span>';
            movieHTML += '<span class="movie-year">"' + item.Year + '"</span></li>';

        }); //end loop 
    
    } else { 
        
        movieHTML += '<div class="no-movies"><i class="material-icons icon-help">help_outline</i>No movies found that match: ' + searchValue + '.</div></li>';
         
    }; //end conditional statment response
    
    $("#movies").html(movieHTML);
   
}; //end callback function

$.getJSON(omdbAPI, data, callBack); 

}); //end searchfield

})(); //End selfevoking function

