import { Popup } from "./Popup.js"
export default class PopupDelete extends Popup {
    constructor({selector, submit}){
        super({selector});
            this._submit = submit;
        this._form = this._popupElement.querySelector('.popup__form');
    }
    submitCallback(callBack) {
     this._submit = callBack 
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit();
        });
      }
}