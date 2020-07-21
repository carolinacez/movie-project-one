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
			document.getElementById('poster').innerHTML = "";
			//sample of a poster used for testing 
			for(i = 0; i < response.Search.length; i++) {
			if(response.Response === "True"){
			if(response.Search[i].Poster !== "N/A"){
			let posterImg = $('<img>'); 
			posterImg.attr('src', response.Search[i].Poster);
			posterImg.attr('data-id', response.Search[i].imdbID);
			posterImg.addClass('poster');
			posterImg.appendTo('#poster');
		}
			
			
		} else {
		console.log(response.Error)
		}
	} 
	

	})
	}

	
	





