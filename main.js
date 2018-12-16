const inputName = document.querySelector('#inputName');
const userName = document.querySelector('#userName');
const goButton = document.querySelector('#buttonStart');
const pageAccueil = document.querySelector('#page_accueil');
const pageCarte = document.querySelector('#page_carte');

const ChangeUserName = (input, output) => {
	output.innerHTML = input;
}

const AccueilToCarte = evt => {
    evt.preventDefault();
	pageAccueil.classList.add('page-inactive');
	pageCarte.classList.remove('page-inactive');
}
	

inputName.addEventListener('keyup', evt => ChangeUserName(evt.target.value, userName));

goButton.addEventListener('click', evt => AccueilToCarte(evt));





const cross = document.querySelectorAll('.closed_cross');

const OpenPopup = (evt, index) => {
    const popup = document.querySelector(`#${index}`);
    evt.preventDefault();
    const cur = popup;
    cur.classList.add('popup-active');
    document.querySelector('#blackBG').style.display = "fixed";
}


const ClosePopup = evt => {
    evt.preventDefault();
    const cur = document.querySelector('.popup-active');
    cur.classList.remove('popup-active');
    document.querySelector('#blackBG').style.display = "none";
    }

for (var i = 0; i < cross.length; i++){  
    cross[i].addEventListener('click', evt => ClosePopup(evt));  
}



mapboxgl.accessToken = 'pk.eyJ1IjoiaW1hY3Ryb3R0ZXIiLCJhIjoiY2pwazZ1NzdqMDBlajN3bzZudXYxOGtyMCJ9.jD0WGzpc-JqWoAehTGBouQ';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/imactrotter/cjpmh7pll0nde2rmcyi8ftdn0',
    center: [2.2, 46.3],
    zoom: 5
});

var features = map.queryRenderedFeatures({ layers: ['markers-map'] });

map.on('click', 'markers-map', (evt, index) => {
        if (evt.features[0].properties.title === "Nord") index = "popupNord";
        if (evt.features[0].properties.title === "Sud-Ouest") index = "popupSudOuest";
        if (evt.features[0].properties.title === "Est") index = "popupEst";
        if (evt.features[0].properties.title === "Bretagne") index = "popupBretagne";
        if (evt.features[0].properties.title === "Sud-Est") index = "popupSudEst";
        if (evt.features[0].properties.title === "Corse") index = "popupCorse";
        if (evt.features[0].properties.title === "IMAC") index = "popupIMAC";
        if (evt.features[0].properties.title === "Centre") index = "popupCentre";

        OpenPopup(evt, index);
    });

map.on('mouseenter', 'markers-map', function () {
        map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'markers-map', function () {
        map.getCanvas().style.cursor = '';
});