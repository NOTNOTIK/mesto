
//import { userId, ownerId} from './index.js'

import { handleCardClick } from './index.js';

export class Card {
  constructor( title, src, templateCard, ownerId, userId) {
    this._templateCard = templateCard;
    this._title = title;
    this._src = src;
    this._ownerId = ownerId;
    this._userId = userId;
    
    
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
    this._cardDelete = this._element.querySelector(".cards__del");
    this._cardImage.src = this._src;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
   
    this._handleDeleteCard()


    return this._element;

  }
  _setEventListeners() {
    this._cardImage  = this._element.querySelector(".cards__img").addEventListener("click", () => {
      handleCardClick({image: this._src, text: this._title})
    });
   /* this._cardDelete  = this._element.querySelector(".cards__del").addEventListener("click", () => {
      handleDeleteClick()
    });*/
      this._likeButton = this._element.querySelector(".cards__like-button")
      this._likeButton.addEventListener("click", () => { this._handleLike()});
      
     // console.log(this._ownerId + 'Карточка')
      
    }

    _handleDeleteCard() {
      if( this._userId === this._ownerId ){
        this._element.querySelector(".cards__del").addEventListener("click", () => { 
          this._element.remove();
          
        })
      }else{
        this._element.querySelector(".cards__del").remove()
      }
    }
  
  removeCard(){
    this._element.remove();
    this._element = null;
    
  }
 

  _handleLike(){ 
    this._likeButton.classList.toggle("cards__like-button_active"); 
  } 
}

