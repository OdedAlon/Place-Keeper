'use strict';

var gCurrMap;

function init() {
    var color = getBgColor();
    document.body.style.backgroundColor = color;
}

function initMapPage() {
    var color = getBgColor();
    document.body.style.backgroundColor = color;
    initMap();
    renderTable()
}

// Initialize and add the map
function initMap() {
    // The location of Eylat
    //   29.55686756986262, 34.99028335971424
    const EYLAT = { lat: 29.556, lng: 34.990 };
    // The map, centered at Eylat
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: EYLAT,
    });
    gCurrMap = map;
    // The marker, positioned at Eylat
    var marker = new google.maps.Marker({
        position: EYLAT,
        map: map,
    });

    map.addListener('click', function (e) {
        var data = {};
        data.lat = e.latLng.lat();
        data.lng = e.latLng.lng();
        onAddNewPlace(data);
    });
}

function onAddNewPlace(data) {
    var newLocation = { lat: data.lat, lng: data.lng };
    var marker = new google.maps.Marker({
        position: newLocation,
        map: gCurrMap                           
    });
    marker.setMap(map);
    var placeName = prompt('Insert the name of the place:');
    AddNewPlace(placeName, newLocation);
    renderTable();
}

// to remove a marker - marker.setMap(null); 

function onGetPosition() {
    getPosition()
}

function showLocation(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var currLocation = { lat, lng };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: currLocation,
    });
    gCurrMap = map;
    map.addListener('click', function (e) {
        var data = {};
        data.lat = e.latLng.lat();
        data.lng = e.latLng.lng();
        onAddNewPlace(data);
    });
}

function renderTable() {
    var places = getPlaces();
    var strHtmls = `<table><tbody><tr><th>id</th><th>Place's Name</th><th>lat</th><th>lng</th></tr>`;
    strHtmls += places.map(place => `<tr><td>${place.id}</td><td>${place.name}</td><td>${place.lat}</td><td>${place.lng}</td></tr>`).join('');
    strHtmls += `</tbody></table>`; 
    document.querySelector('.table-container').innerHTML = strHtmls;
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function onSetPref(ev) {
    ev.preventDefault();
    // var color = document.querySelector('input.[name="color"]');          doesn't work, i don't know why
    // var date = document.querySelector('input.[name="date"]').value;
    // var time = document.querySelector('input[name="time"]').value;
    var color = document.querySelector('#color').value;
    var date = document.querySelector('#date').value;
    var time = document.querySelector('#time').value;
    var email = document.querySelector('#email').value;
    var age = document.querySelector('#age').value;
    document.body.style.backgroundColor = color;
    setPref(color, date, time, email, age);
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}