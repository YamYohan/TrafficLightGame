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
answerList[0] = new Contact(12, 480, 1);
answerList[1] = new Contact(77, 480, 1);
answerList[2] = new Contact(142, 480, 1);
answerList[3] = new Contact(207, 480, 1);
answerList[4] = new Contact(272, 480, 1);
answerList[5] = new Contact(337, 480, 1);

function randomPosition(){
    return Math.floor(Math.random()*4 + 1);
}

function randomValue(){
    return Math.floor(Math.random()*3 + 1);
}

//------------------------------------------
var add, sub;

context.clearRect(0, 0, 200, 200);

function drawValue(x, y, value){
    context.beginPath();
    context.rect(x, y, 80, 30);
    context.fillStyle = 'aliceblue';
    context.fill();
    context.closePath();
    for(var i = 0; i < value; i++){
        context.beginPath();
        context.rect(x + i * 30, y, 20, 30);
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();
    }
}

function Up(){
    add = randomValue();
    drawValue(280, 210, add);
}
function Down(){
    sub = randomValue();
    drawValue(280, 290, sub);
}

Up();
Down();
//------------------------------------------

var randomList = [];
for (var i = 0; i<6; i++){
    randomList[i] = contactList[i].position;
    answerList[i].position = random(randomList[i]);
}

function random(a){
    var b = randomPosition();
    while (b == a){
        b = randomPosition();
    }
    return b;
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
    Up();
}

function handleButtonDown() {
    contactList.forEach(function (currentContact) {
        if (currentContact.isTargeted) {
            currentContact.shiftDown();
            currentContact.draw();
            drawAnswerList();
        }
    });
    Down();
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

function key(a){
    a.isTargeted = true;
    a.strokeColor = '#0000ff';
    a.draw();
}

document.addEventListener("keydown", function(event){
    switch (event.keyCode) {
        case 13: //Enter
            location.reload();
            break;
        case 38: //Up Arrow
            handleButtonUp();
            break;
        case 40: //Down Arrow
            handleButtonDown();
            break;
        case 49: //1
            key(contactList[0]);
            break;
        case 50: //2
            key(contactList[1]);
            break;
        case 51: //3
            key(contactList[2]);
            break;
        case 52: //4
            key(contactList[3]);
            break;
        case 53: //5
            key(contactList[4]);
            break;
        case 54: //6
            key(contactList[5]);
            break;               
        default:
            break;
    }
})

drawContactList();
drawAnswerList();
mousePressed();