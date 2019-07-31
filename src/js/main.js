let dialogsMessages = document.querySelector('.dialogs__messages');
let dialogs = document.querySelector('.dialogs__list');

function showDialogs() {
  // dialogsMessages.classList.remove('show');
  // dialogsMessages.classList.add('hide');
  dialogs.classList.remove('hide');
  dialogs.classList.add('show');
}

function hideDialogs() {
  dialogs.classList.remove('show');
  dialogs.classList.add('hide');
  // dialogsMessages.classList.remove('hide');
  // dialogsMessages.classList.add('show');
}
