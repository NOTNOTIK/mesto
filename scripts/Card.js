export class Card {
    constructor(title, src) {
      this._title = title;
      this._src = src;
    }
    _getTemplate() {
      const cardElement = document
        .querySelector("#template")
        .content.querySelector(".cards__item")
        .cloneNode(true);
  
      return cardElement;
    }
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      const cardImage = this._element.querySelector(".cards__img"); //.src = this._src;
      const cardTitle = this._element.querySelector(".cards__title"); //.textContent = this._title;
      cardImage.src = this._src;
      cardTitle.textContent = this._title;
      return this._element;
    }
    _setEventListeners() {
      this._element.querySelector(".cards__img").addEventListener("click", () => {
        this._handlePopup();
      });
      this._element.querySelector(".cards__like-button").addEventListener("click", () => {
        this._handleLike();
      });
      this._element.querySelector(".cards__del").addEventListener("click", () => {
            this._element.remove();
          });
    }
    _handlePopup() {
      popupImage.src = this._src;
      figcaption.textContent = this._title;
      openPopup(popupImg);
    }
    _handleLike(){
      this._element.querySelector(".cards__like-button").classList.toggle("cards__like-button_active");
    }
    
    _closePopupByOverlayClick = (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
      }
    };
    _closePopupByEsc = (evt) => {
      if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"));
      }
    };
  }