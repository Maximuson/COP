"use strict";

var dialogsMessages = document.querySelector('.dialogs__messages');
var dialogs = document.querySelector('.dialogs__list');
var buttonBack = document.querySelector('.dialogs__nav-back');
var dialogItem = document.querySelectorAll('.dialogs__list-item');
var inputFile = document.querySelector('#file');
var buttonLoad = document.querySelector('#load-img');
var img = document.querySelector('#loaded-img');
var MIN_TABLET_W = 768;
/**
 *
 * Show dialogs block.
 * Textarea will be hidden for phones
 */

function showDialogs() {
  dialogs.classList.remove('hide');
  dialogs.classList.add('show');

  if (window.innerWidth < MIN_TABLET_W) {
    dialogsMessages.style.display = 'none';
  } else {
    dialogsMessages.style.display = 'flex';
  }

  buttonBack.style.display = 'none';
}

function hideDialogs() {
  dialogs.classList.remove('show');
  dialogs.classList.add('hide');
  dialogsMessages.style.display = 'flex';
  buttonBack.classList.replace('left-arrow', 'right-arrow');
  buttonBack.style.display = 'flex';
}

buttonBack.addEventListener('click', function () {
  showDialogs();
});
dialogItem.forEach(function (i) {
  i.addEventListener('click', function () {
    hideDialogs();
  });
});

function convertFileToBase64viaFileReader(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';

  xhr.onload = function () {
    var reader = new FileReader();

    reader.onloadend = function () {
      callback(reader.result);
    };

    reader.readAsDataURL(xhr.response);
  };

  xhr.open('GET', url);
  xhr.send();
}

function loadImage(input, loadTo) {
  var reader = new FileReader();

  reader.onloadend = function () {
    loadTo.src = reader.result;
  };

  reader.readAsDataURL(input.files[0]);
}

buttonLoad.addEventListener('click', function () {
  loadImage(inputFile, img);
});