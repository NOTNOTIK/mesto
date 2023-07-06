import { Popup } from "./Popup.js"
export class PopupWithImage extends Popup {
    constructor({selector}){
        super({selector});
        this._image = this._popupElement.querySelector('.popup__image');
        this._text =  this._popupElement.querySelector('.popup__figcaption');
    }
    open(data){
        this._image.src = data.image;
        this._image.alt = data.text;
     this._text.textContent = data.text;
     super.open();
    }
}