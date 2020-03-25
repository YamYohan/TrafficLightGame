var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var contactList = [];
contactList[0] = new Contact(12, 20, 1);
contactList[1] = new Contact(77, 20, 2);
contactList[2] = new Contact(142, 20, 3);
contactList[3] = new Contact(207, 20, 2);
contactList[4] = new Contact(272, 20, 1);
contactList[5] = new Contact(337, 20, 3);

var answerList = [];
answerList[0] = new Contact(12, 480, 2);
answerList[1] = new Contact(77, 480, 2);
answerList[2] = new Contact(142, 480, 2);
answerList[3] = new Contact(207, 480, 2);
answerList[4] = new Contact(272, 480, 2);
answerList[5] = new Contact(337, 480, 2);

function drawContactList() {
    contactList.forEach(function (currentContact) {
        currentContact.strokeColor = '#000000';
        currentContact.draw();
    })
}

function drawAnswerList() {
    answerList.forEach(function (answerList) {
        answerList.strokeColor = '#000000';
        answerList.draw();
    })
}

function handleButtonUp() {
    contactList.forEach(function (currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftUp();
            currentContact.draw();
        }
    });
}

function handleButtonDown() {
    contactList.forEach(function (currentContact) {
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

drawContactList();
drawAnswerList();
mousePressed();