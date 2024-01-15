//KEY : 37bc6230cf144820bdca3d8b896140cb
//url: https://api.openweathermap.org/data/2.5/weather?lat=-22.9110137&lon=-43.2093727&appid=37bc6230cf144820bdca3d8b896140cb

//Pegando a altitude e latitude baseada no nome da cidade
// http://api.openweathermap.org/geo/1.0/direct?q=RioDeJaneiro&limit=5&appid=37bc6230cf144820bdca3d8b896140cb

let data = [];

function loadWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-22.9110137&lon=-43.2093727&appid=37bc6230cf144820bdca3d8b896140cb")
    .then((r) => r.json())
    .then((json) => {

        data = json;

        /*let titleElement = document.createElement('h1');
        let titleText = document.createTextNode(data.name);
        titleElement.appendChild(titleText);
        document.body.appendChild(titleElement);
        */
    })
}

loadWeather()
