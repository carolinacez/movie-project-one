$(document).foundation() //do not change this line

function secondApiCall(ID) {
	console.log(ID);

	let secondUrlApi = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + ID 
	console.log(secondUrlApi);

	$.ajax({
		url: secondUrlApi,
		type: "GET",
		dataType: "json",
		headers: {
			"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
			"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
		}
	})
		.then(function (response) {
            //display function goes here 
			console.log(response);

		})

}

function thirdApiCall() {
	

    let thirdUrlApi = "https://streamzui-streamzui-v1.p.rapidapi.com/search?type=Movie&country=us&page=1"

    $.ajax({
		url: thirdUrlApi ,
		"async" : true,
	"crossDomain" : true, 
		type: "GET" , 
		dataType: "json" ,
		headers : {"x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
		"x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"}
    })
    .then(function(response){
        //display function goes here 
		console.log(response);

	}) 
}

