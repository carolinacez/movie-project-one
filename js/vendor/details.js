$(document).foundation() //do not change this line

function secondApiCall() {
    let ID = localStorage.getItem("movieId");
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
            //console.log(response)
            //display function goes here 
            display(response);
        })
}

function thirdApiCall() {
    let ID = localStorage.getItem("movieId");

    let thirdUrlApi = "https://streamzui-streamzui-v1.p.rapidapi.com/search?type=Movie&imdbid=" + ID +
        "&country=us&page=1"

    $.ajax({
        url: thirdUrlApi,
        "async": true,
        "crossDomain": true,
        type: "GET",
        dataType: "json",
        headers: {
            "x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
            "x-rapidapi-key": "ea27b482e3mshcea35e8094dc17ep18e197jsn4219678d9404"
        }
    })
        .then(function (response) {
            if (response.Count >= 1) {

                //display function goes here                 
                console.log(response);
            } else {
                //do nothing or state no Amazon Prime available 
                console.log("No Amazon Prime")
            }
        })
}

function onLoad() {
    secondApiCall();
    thirdApiCall();
}

window.addEventListener("DOMContentLoaded" , onLoad);


function display(data){
    console.log(data);

    let actorEL = document.getElementById('actors');
    let trailerEl = document.getElementById('trailer');
    let synopsisEl = document.getElementById('synopsis');
    let titleEl = document.getElementById('movie-details');


    
    for(let i = 0; i < data.cast.length; i++){
    let newActorEl = document.createElement('div');
    newActorEl.classList = 'card';
    let newActor = document.createElement('div');
    newActor.classList = 'card-divider';
    newActor.innerHTML = data.cast[i].actor;
    newActorEl.appendChild(newActor);
    let newChar = document.createElement('div');
    newChar.classList = 'card-section';
    newChar.innerHTML = data.cast[i].character;
    newActorEl.appendChild(newChar);
    actorEL.appendChild(newActorEl);
    }
    

    let plot = document.createElement('div');
    plot.innerHTML = data.plot;
    synopsisEl.appendChild(plot);
    
    let title = document.createElement('div');
    title.innerHTML = data.title;
    titleEl.appendChild(title);
    let year = document.createElement('div');
    year.innerHTML = data.year;
    titleEl.appendChild(year);
    let runTime = document.createElement('div');
    runTime.innerHTML = data.length;
    titleEl.appendChild(runTime);

    let link = document.createTextNode('Link to Trailer');
    let trailerLink  = document.createElement('a');
    trailerLink.appendChild(link);
    trailerLink.href = data.trailer.link;
    trailerLink.title = "Link to trailer."
    trailerEl.appendChild(trailerLink);
    
    
    

    
}

