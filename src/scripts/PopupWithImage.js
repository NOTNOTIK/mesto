import { Popup } from "./Popup.js"
import {popupImage, figcaption} from './index.js'
export class PopupWithImage extends Popup {
    constructor({selector,  popupImage, figcaption}){
        super({selector});
        this._image =  popupImage;
        this._text = figcaption;
    }
    open(data){
    popupImage.src = data.src;
    // this._image = data.src;
     figcaption.textContent = data.title;
     super.open();
    }
}