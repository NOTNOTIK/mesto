export class Card {
  constructor({data, handleDeleteClick, handleCardClick, handleSetLike, handleDeleteLike}, templateSelector, userId ){//title, src,  ownerId, userId, cardId, likes,{ handleDeleteClick, handleCardClick, handleSetLike, handleDeleteLike}, ) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id
    this._cardId = data._id
    this._likes = data.likes
    this._userId = userId;
    this._handleDeleteClick = handleDeleteClick;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
   this._handleCardClick = handleCardClick;
   
  
  }
  _getTemplate() {
  const cardElement = document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(true); 
    
  return cardElement; 

  }
  generateCard() {
    console.log(this._handleDeleteClick);
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardImage = this._element.querySelector(".cards__img"); 
    this._cardTitle = this._element.querySelector(".cards__title"); 
    this._buttonDelete = this._element.querySelector(".cards__del"); 
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._likeNumber = this._element.querySelector('.cards__like-number');
    this._likeNumber.textContent = this._likes.length;
    if(this._userId !== this._ownerId){ 

      this._element.querySelector('.cards__del').remove() 

    } 
     
   
    return this._element;

  }
  _setEventListeners() {
     this._element.querySelector(".cards__img").addEventListener("click", () => {
      this._handleCardClick({image: this._src, text: this._title})
    });  

    this._likeButton = this._element.querySelector(".cards__like-button")
     this._likeButton.addEventListener('click', () => {
      if(this._likeButton.classList.contains('cards__like-button_active')){
        this._handleDeleteLike()
        
      }else{
        this._handleSetLike()
        
      }
     })

    this._element.querySelector('.cards__del').addEventListener("click", () => {
      this._handleDeleteClick()
      })
    this._checkLikedState()
    return this._element;
    }
    
      getId() {
        return this._cardId
    }
  removeCard  ()  {
    this._element.remove();
    this._element = null;
  }
_checkLikedState(){
  this._likes.forEach((like) => {
    if(like._id === this._userId){
      this._likeButton.classList.add('cards__like-button_active');
    }
  })
}

 
  makeLike (data)  {
    this._likes = data.likes
    this._likeNumber.textContent = this._likes.length;
    this._likeButton.classList.toggle('cards__like-button_active');
    return this._likes.length
}
}

