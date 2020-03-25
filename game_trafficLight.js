var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var contactList = [];
contactList[0] = new Contact(12, 20, 'top');
contactList[1] = new Contact(77, 20, 'mid');
contactList[2] = new Contact(142, 20, 'bot');
contactList[3] = new Contact(207, 20, 'mid');
contactList[4] = new Contact(272, 20, 'top');
contactList[5] = new Contact(337, 20, 'bot');

var answerList = [];
answerList[0] = new Contact(12, 480, 'mid');
answerList[1] = new Contact(77, 480, 'mid');
answerList[2] = new Contact(142, 480, 'mid');
answerList[3] = new Contact(207, 480, 'mid');
answerList[4] = new Contact(272, 480, 'mid');
answerList[5] = new Contact(337, 480, 'mid');

function drawContacts() {
    contactList.forEach(function (currentContact) {
        currentContact.strokeColor = '#000000';
        currentContact.draw();
    })
}

function drawAnser() {
    answerList.forEach(function (answerList) {
        answerList.strokeColor = '#000000';
        answerList.draw();
    })
}

function handleButtonUp() {
    contactList.forEach(function(currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftUp();
            currentContact.draw();
        }
    });
}

function handleButtonDown() {
    contactList.forEach(function(currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftDown();
            currentContact.draw();
        }
    });
}

var ableToLink = false;
var mouseX = null, mouseY = null;

function mousePressed() {
    canvas.onmousedown = function (mousePosition) {
        mouseX = mousePosition.offsetX;
        mouseY = mousePosition.offsetY;

        if (!ableToLink) {
            contactList.forEach(function (currentContact) {
                currentContact.handleOnclick();
            })
        } else {
            contactList.forEach(function (currentContact) {
                currentContact.drawOnTargeted();
            })
        }
    }
}

drawContacts();
drawAnser();
mousePressed();