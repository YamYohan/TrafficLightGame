var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var contactList = [];
contactList[0] = new Contact(12, 20, randomPosition());
contactList[1] = new Contact(77, 20, randomPosition());
contactList[2] = new Contact(142, 20, randomPosition());
contactList[3] = new Contact(207, 20, randomPosition());
contactList[4] = new Contact(272, 20, randomPosition());
contactList[5] = new Contact(337, 20, randomPosition());

var answerList = [];
answerList[0] = new Contact(12, 480, randomPosition());
answerList[1] = new Contact(77, 480, randomPosition());
answerList[2] = new Contact(142, 480, randomPosition());
answerList[3] = new Contact(207, 480, randomPosition());
answerList[4] = new Contact(272, 480, randomPosition());
answerList[5] = new Contact(337, 480, randomPosition());

function randomPosition(){
    return Math.floor(Math.random()*3 + 1);
}

function drawContactList() {
    contactList.forEach(function (currentContact) {
        currentContact.strokeColor = '#000000';
        currentContact.draw();
    })
}

function drawAnswerList() {
    var canWin = 0;
    for (var i = 0; i<answerList.length; i++){
        if(answerList[i].position == contactList[i].position){
            canWin++;
            answerList[i].strokeColor = '#cc00cc';
            answerList[i].draw();
        }
        else{
            answerList[i].strokeColor = '#000000';
            answerList[i].draw();
        }
    }
    if(canWin == 6){
        console.log("You Win!");
        showElement('buttonPlayAgain');
    }
}

function handleButtonUp() {
    contactList.forEach(function (currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftUp();
            currentContact.draw();
            drawAnswerList();
        }
    });
}

function handleButtonDown() {
    contactList.forEach(function (currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftDown();
            currentContact.draw();
            drawAnswerList();
        }
    });
}

function handleButtonPlayAgain(){
    location.reload();
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