import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
    constructor({selector, image, text}){
        super({selector});
        this._image = image;
        this._text = text;
    }
    open(data){
     this._image.src = data.src;
     this._image.alt = data.src;
     this._text.textContent = data.title;
     super.open();
    }
}