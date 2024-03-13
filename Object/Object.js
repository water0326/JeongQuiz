class TextObject {
    constructor(text, font, size, color, x, y, align) {
        this.font = font;
        this.text = text;
        this.size = size;
        this.align = align;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    Render() {
        ctx.font = this.size + " " + this.font;
        ctx.fillStyle = this.color;
        ctx.textAlign = this.align;
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.x, this.y);
    }
    Update() {

    }
}

class GameButton {
    constructor(text, font, size, textColor, BGColor, touchedTextColor, touchedBGColor, x, y, width, height, cornerRadius) {
        this.isHover = false;
        this.font = font;
        this.text = text;
        this.size = size;
        this.textColor = textColor;
        this.BGcolor = BGColor;
        this.touchedBGColor = touchedBGColor;
        this.touchedTextColor = touchedTextColor;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.cornerRadius = cornerRadius;
    }
    Update() {
        this.OnUpdate();
        if(isTouching) {
            this.isHover = this.IsMouseIn(startTouchX, startTouchY);
        }
        else {
            this.isHover = false;
        }
        if(this.IsMouseIn(startTouchX, startTouchY) && this.IsMouseIn(endTouchX, endTouchY)) {
            this.Run();
            TouchClear();
        }
    }
    OnUpdate() {

    }
    Render() {
        ctx.fillStyle = this.isHover ? this.touchedBGColor : this.BGcolor;
        ctx.beginPath();
        ctx.moveTo(this.x + this.cornerRadius, this.y);
        ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, this.cornerRadius);
        ctx.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, this.cornerRadius);
        ctx.arcTo(this.x, this.y + this.height, this.x, this.y, this.cornerRadius);
        ctx.arcTo(this.x, this.y, this.x + this.width, this.y, this.cornerRadius);
        ctx.closePath();
        ctx.fill();

        ctx.font = this.size + " " + this.font;
        ctx.fillStyle = this.isHover ? this.touchedTextColor : this.textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.width * 0.5 + this.x, this.height * 0.5 + this.y);
    }
    IsMouseIn(x, y) {
        return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
    }
    Run() {

    }
}
class GiftCodeBlock {
    constructor(text, font, size, textColor, BGColor, x, y, width, height, cornerRadius) {
        this.isHover = false;
        this.font = font;
        this.text = text;
        this.size = size;
        this.textColor = textColor;
        this.BGcolor = BGColor;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.cornerRadius = cornerRadius;
    }
    Update() {
        this.OnUpdate();
        if(isTouching) {
            this.isHover = this.IsMouseIn(startTouchX, startTouchY);
        }
        else {
            this.isHover = false;
        }
        if(this.IsMouseIn(startTouchX, startTouchY) && this.IsMouseIn(endTouchX, endTouchY)) {
            this.Run();
            TouchClear();
        }
    }
    Render() {
        ctx.fillStyle = this.isHover ? this.touchedBGColor : this.BGcolor;
        ctx.beginPath();
        ctx.moveTo(this.x + this.cornerRadius, this.y);
        ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, this.cornerRadius);
        ctx.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, this.cornerRadius);
        ctx.arcTo(this.x, this.y + this.height, this.x, this.y, this.cornerRadius);
        ctx.arcTo(this.x, this.y, this.x + this.width, this.y, this.cornerRadius);
        ctx.closePath();
        ctx.fill();

        ctx.font = this.size + " " + this.font;
        ctx.fillStyle = this.isHover ? this.touchedTextColor : this.textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text, this.width * 0.5 + this.x, this.height * 0.5 + this.y);
    }
}