import { data } from 'jquery';
import {handleCardClick} from './index.js'
//import { handleDeleteClick } from './index.js';

export class Card {
  constructor(title, src, templateCard, api, id) {
    this._templateCard = templateCard;
    this._title = title;
    this._src = src;
    this._api = api;
    this._id = id
    
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
    this._cardDelete = this._element.querySelector(".cards__del");
    this._cardImage.src = this._src;
    this._cardTitle.textContent = this._title;
    this._cardImage.alt = this._title;
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
      console.log(this._id)

      if( this._owner === this.id){
        this._cardDelete = this._element.querySelector(".cards__del").addEventListener("click" , () => {
         this._element.remove();
         console.log('Заебись')
        
         })
       }else{
         this._element.querySelector(".cards__del").remove();
         console.log(' не Заебись')
         
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

