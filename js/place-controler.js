'use strict';

function init() {
    var color = getBgColor();
    document.body.style.backgroundColor = color;
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