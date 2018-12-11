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
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [2.2, 46.3],
    zoom: 5
});