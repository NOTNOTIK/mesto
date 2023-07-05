export class Popup{
    constructor({selector}){
      this._popupElement = document.querySelector(selector);
        this._buttonClose = this._popupElement?.querySelector('.popup__close')
    }
    open(){
        this._popupElement.classList.add("popup_opened");
        this._popupElement.addEventListener("click", this._closePopupByOverlayClick);
        document.addEventListener("keydown", this._closePopupByEsc);
        this._popupElement.addEventListener("click",this.setEventListeners())
    }
    close(){
        this._popupElement.classList.remove("popup_opened");
        this._popupElement.removeEventListener("click", this._closePopupByOverlayClick);
        document.removeEventListener("keydown", this._closePopupByEsc);
        this._popupElement.removeEventListener("click",this.setEventListeners())
    }
   _closePopupByOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close(evt.currentTarget);
        }
      };
      _closePopupByEsc = (evt) => {
        if (evt.key === "Escape") {
          this.close();
        }
      };
    setEventListeners(){
        this._buttonClose?.addEventListener('click', () => {
          this.close();
        })
        
    }
};

