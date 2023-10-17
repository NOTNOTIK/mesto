
//import { userId, ownerId} from './index.js'

import {handleCardClick} from './index.js';


export class Card {
  constructor(  title, src,  ownerId, userId, cardId, likes,{ handleDeleteClick, handleSetLike} ) {
    this._title = title;
    this._src = src;
    this._ownerId = ownerId;
    this._userId = userId;
    this._cardId = cardId;
    this._likes = likes;
    this._handleDeleteClick = handleDeleteClick;
   this._handleSetLike = handleSetLike;
  
  }
  _getTemplate() {
    const cardElement = document.querySelector('#template').content.querySelector(".cards__item").cloneNode(true); 
    
  return cardElement; 
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage = this._element.querySelector(".cards__img"); 
    this._cardTitle = this._element.querySelector(".cards__title"); 
    this._buttonDelete = this._element.querySelector(".cards__del"); 
    this._cardImage.src = this._src;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
    this._likeNumber = this._element.querySelector('.cards__like-number');
        this._likeNumber.textContent = this._likes.length;
    if(this._userId !== this._ownerId){
      this._element.querySelector('.cards__del').remove()
    }
     
   
    return this._element;

  }
  _setEventListeners() {
    this._cardImage  = this._element.querySelector(".cards__img").addEventListener("click", () => {
      handleCardClick({image: this._src, text: this._title})
    });    
      this._likeButton = this._element.querySelector(".cards__like-button")
      this._likeButton.addEventListener("click", () => {  this._handleSetLike()});
     
      this._element.querySelector('.cards__del').addEventListener("click", () => {
      this._handleDeleteClick()
      })
      
    }
    
      getId() {
        return this._cardId
    }
  removeCard(){
    this._element.remove();
    this._element = null;
  }
 
  makeLike  ()  {
    this._likeNumber.textContent = this._likes.length;
    this._likeButton.classList.toggle('cards__like-button_active');
}
}

