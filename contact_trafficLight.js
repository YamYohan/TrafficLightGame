class Contact {
    constructor(x, y, position) {
        this.x = x;
        this.y = y;
        this.position = position;
        this.color1 = '#595959';
        this.color2 = '#ff0000'; //red
        this.color3 = 'yellow';
        this.color4 = '#00cc00'; //green
        this.strokeColor = '#000000'; //black
        this.height = 100;
        this.width = 50;
        this.isTargeted = false;
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.lineWidth = 10;
        context.strokeStyle = this.strokeColor;
        context.stroke();
        context.fillStyle = this.color1;
        context.fill();
        context.closePath();

        if (this.position == 1) {
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else if (this.position == 2) {
            context.beginPath();
            context.rect(this.x, this.y + this.height / 3, this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color3;
            context.fill();
            context.closePath();
        } else {
            context.beginPath();
            context.rect(this.x, this.y + 2 * (this.height / 3), this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color4;
            context.fill();
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
        if (this.position == 1) {
            this.position = 3;
        } else if (this.position == 2) {
            this.position = 1;
        } else {
            this.position = 2;
        }
    }

    shiftDown() {
        if (this.position == 1) {
            this.position = 2;
        } else if (this.position == 2) {
            this.position = 3;
        } else {
            this.position = 1;
        }
    }
}