class Contact {
    constructor(x, y, position) {
        this.x = x;
        this.y = y;
        this.position = position;
        this.color1 = '#595959';
        this.color2 = '#ff0000'; //red
        this.color3 = 'yellow';
        this.color4 = '#00cc00'; //green
        this.color5 = 'orange';
        this.strokeColor = '#000000'; //black
        this.height = 100;
        this.width = 50;
        this.isTargeted = false;
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 10;
        context.strokeStyle = '#000000';
        context.stroke();
        context.fillStyle = this.color1;
        context.fill();
        context.closePath();

        if (this.position == 1) {
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height / 4);
            // context.strokeStyle = '#000000';
            // context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else if (this.position == 2) {
            context.beginPath();
            context.rect(this.x, this.y + this.height / 4, this.width, this.height / 4);
            // context.strokeStyle = '#000000';
            // context.stroke();
            context.fillStyle = this.color3;
            context.fill();
            context.closePath();
        } else if (this.position == 3) {
            context.beginPath();
            context.rect(this.x, this.y + 2 * (this.height / 4), this.width, this.height / 4);
            // context.strokeStyle = '#000000';
            // context.stroke();
            context.fillStyle = this.color4;
            context.fill();
            context.closePath();
        } else {
            context.beginPath();
            context.rect(this.x, this.y + 3 * (this.height / 4), this.width, this.height / 4);
            // context.strokeStyle = '#000000';
            // context.stroke();
            context.fillStyle = this.color5;
            context.fill();
            context.closePath();
        }

        if(this.strokeColor == '#0000ff'){
            context.beginPath();
            context.rect(this.x - 2.5, this.y - 2.5, this.width + 5, this.height + 5);
            context.lineWidth = 5;
            context.strokeStyle = '#0000ff';
            context.stroke();
            context.closePath();
        }
        
        if(this.strokeColor == '#cc00cc'){
            context.beginPath();
            context.rect(this.x - 2.5, this.y - 2.5, this.width + 5, this.height + 5);
            context.lineWidth = 5;
            context.strokeStyle = '#cc00cc';
            context.stroke();
            context.closePath();
        }
    }

    isClicked() {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            return true;
        }
        return false;
    }

    handleOnclick() {
        if (this.isClicked()) {
            this.isTargeted = true;
            this.drawOnTargeted();
        }
    }

    drawOnTargeted() {
        this.strokeColor = '#0000ff';
        this.draw();
    }

    shiftUp() {
        var a = (this.position - add + 4) % 4;
        if (a == 0) {
            this.position = 4;
        } else {
            this.position = a;
        }
    }

    shiftDown() {
        var a = (this.position + sub) % 4;
        if (a == 0) {
            this.position = 4;
        } else {
            this.position = a;
        }

    }
}