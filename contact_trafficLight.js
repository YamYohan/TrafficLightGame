class Contact {
    constructor(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
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

        if (this.status == 'top') {
            context.beginPath();
            context.rect(this.x, this.y, this.width, this.height / 3);
            context.strokeStyle = this.strokeColor;
            context.stroke();
            context.fillStyle = this.color2;
            context.fill();
            context.closePath();
        } else if (this.status == 'mid') {
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
        if (this.status == 'top') {
            this.status = 'bot';
        } else if (this.status == 'mid') {
            this.status = 'top';
        } else {
            this.status = 'mid';
        }
    }

    shiftDown() {
        if (this.status == 'top') {
            this.status = 'mid';
        } else if (this.status == 'mid') {
            this.status = 'bot';
        } else {
            this.status = 'top';
        }
    }
}