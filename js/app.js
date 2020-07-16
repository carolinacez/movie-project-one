$(document).foundation() //do not change this line

//Declare global variables here


//Action handlers and listeners
$('#titleBtn').on('click', test);

function test(){
    console.log('success');
    console.log($('#movieTitle').val());
}

/*
Movie Database. use this to search by text and get the imdbID (also returns poster & title)
 fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers%20Endgame", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

IMDB - Unofficial. use this to search with movie id from first search (returns cast etc)
fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

Streamzui - use to link to amazon prime
fetch("https://streamzui-streamzui-v1.p.rapidapi.com/search?type=Movie&country=us&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
		"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

*/
