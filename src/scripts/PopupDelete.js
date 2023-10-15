import { Popup } from "./Popup.js"
export default class PopupDelete extends Popup {
    constructor({selector, submit}, handleDeleteClick, cardId, card){
        super({selector});
        this._submit = submit;
        this._cardId = cardId;
        this._card = card;
     this.handleDeleteClick = handleDeleteClick
    }
    open(data){
     super.open(data)
    }
    setEventListeners() {
        super.setEventListeners();
        this._form = document.querySelector('.popup_form_del').addEventListener('submit', (event) => {
            event.preventDefault();
            this._submit({card, cardId});
        })
        this.handleDeleteClick(this._cardId)
      }
}