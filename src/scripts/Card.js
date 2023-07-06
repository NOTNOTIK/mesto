import {popupImage, figcaption} from './constants.js'
import{handleCardClick} from './index.js'
export class Card {
  constructor(title, src, templateCard) {
    this._templateCard = templateCard;
    this._title = title;
    this._src = src;
  }
  _getTemplate() {
    const cardElement = document.querySelector('#template').content.querySelector(".cards__item").cloneNode(true); 

  return cardElement; 
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage = this._element.querySelector(".cards__img"); //.src = this._src;
    this._cardTitle = this._element.querySelector(".cards__title"); //.textContent = this._title;
    this._cardImage.src = this._src;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    return this._element;
  }
  _setEventListeners() {
    this._cardImage  = this._element.querySelector(".cards__img").addEventListener("click", () => {
      handleCardClick({image: this._src, text: this._title})
    });

      this._likeButton = this._element.querySelector(".cards__like-button")
      this._likeButton.addEventListener("click", () => { this._handleLike() });
    this._element.querySelector(".cards__del").addEventListener("click", (this._removeCard.bind(this)));
  }
  _removeCard(){
    this._element.remove();
    this._element = null;
  }
  _handlePopup() {
    popupImage.alt = this._title;
    popupImage.src = this._src;
    figcaption.textContent = this._title;
  }
  _handleLike(){ 
    this._likeButton.classList.toggle("cards__like-button_active"); 
  } 
}

