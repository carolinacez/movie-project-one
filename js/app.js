$(document).foundation() //do not change this line

//Declare global variables here


//Action handlers and listeners
$('#titleBtn').on('click', firstApiCall);
$('#poster').on('click' , movieDetails);


function movieDetails(event) {
	console.log('success');
	let temp = event.target.getAttribute('data-id');
	console.log(temp);
	localStorage.setItem("movieId", temp);
	window.location.href = "details.html"
}

function firstApiCall(event) {
	event.preventDefault()
	
	let ApiValueOne = $("#movieTitle").val().trim()

	let firstUrlApi = "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=" + ApiValueOne

	$.ajax({
		url: firstUrlApi,
		type: "GET",
		headers: {
			"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
			"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
		}
	})
		.then(function (response) {
			console.log(response)
			if(response.Response === "True"){
			//sample of a poster used for testing 
			document.getElementById('poster').innerHTML = "";
			let posterImg = $('<img>'); 
			posterImg.attr('src', response.Search[0].Poster);
			posterImg.attr('data-id', response.Search[0].imdbID);
			posterImg.addClass('poster');
			posterImg.appendTo('#poster');
		} else {
			console.log(response.Error)
		}
		})
}





