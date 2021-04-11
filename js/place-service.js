'use strict';

var gPlaces = getPlaces();
if (!gPlaces) gPLaces = []; 


function getPosition() {
    if (!navigator.geolocation) {
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);    
}

function AddNewPlace(placeName, newLocation) {
    var place = {
        id: makeId(),
        lat: newLocation.lat,
        lng: newLocation.lng,
        name: placeName
    }
    gPlaces.push(place);
    saveToStorage('places', gPlaces);
}

function getPlaces() {
    var places = loadFromStorage('places');
    return places
}
