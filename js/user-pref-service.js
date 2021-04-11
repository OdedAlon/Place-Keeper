'use strict';

var gUserPref;
var gUserData; 
_createUserPref()
_createUserData()

function getBgColor() {
    return gUserPref.color;
}

function setPref(color, date, time, email, age) {
    gUserPref.color = color;
    gUserData.date = date;
    gUserData.time = time;
    gUserData.email = email;
    gUserData.age = age;
    saveToStorage('userPref', gUserPref);
    saveToStorage('userData', gUserData);
}

function _createUserPref() {
    var userPref = loadFromStorage('userPref');
    if (!userPref) {
        userPref = {
            color: 'lightyellow',
        };
    }
    gUserPref = userPref;
    saveToStorage('userPref', gUserPref);
}

function _createUserData() {
    var userData = loadFromStorage('userData');
    if (!userData) {
        userData = {
            date: '',
            time: '',
            email: '',
            age: ''
        };
    }
    gUserData = userData;
    saveToStorage('userData', gUserData);
}