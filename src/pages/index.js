import './index.css';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import {PopupWithImage} from '../scripts/PopupWithImage.js'
import { UserInfo } from '../scripts/UserInfo.js';
import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { Section } from '../scripts/Section';
import Api from '../scripts/api.js';

import PopupDelete from '../scripts/PopupDelete';





const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers : {
    authorization: '6eb9c099-3edc-4778-8a42-37b8233a5aed',
    'Content-Type': 'application/json',
  }
}

export const api = new Api(apiConfig);



 let ownerId = 0;
 let userId = 0;
 let cardId = 0;
 
 //data.name,  data.link,  ownerId, userId, cardId, likes,
 let likes = []
 const popupDelete = new PopupDelete({
  selector: '.popup_type_del',
 })
 popupDelete.setEventListeners()


 const cardsContainer = new Section({
  renderer: (item) => {
      cardsContainer.addItem(createCard(item))
  },
}, cards);

 function createCard(data){
 
     const card = new Card({
      data,
      handleCardClick: (name, link) => {
        popupWithImage.open(name, link);
      },
      handleDeleteClick: () => {
        popupDelete.open();
        popupDelete.submitCallback(() => {
          popupSubmitDel.textContent = 'Подождите...'
          api.deleteCard(card.getId())
          .then(() => {
          card.removeCard();
          popupDelete.close();
      })
      .catch((err) => {
        console.log(`deleteCard - ошибка: ${err}`);
    })
    .finally(() => {
      popupSubmitDel.textContent = 'Удалить'
    });
        })
     },
     handleSetLike: () => {
      api.setLike(card.getId())
          .then((cardId) => {
              card.makeLike(cardId);
              console.log(likes);
              
          })
          .catch((err) => {
              console.log(`makeLike - ошибка: ${err}`);
          })
  },
  handleDeleteLike: () => {
    api.deleteLike(card.getId())
    .then((cardId) =>{
      card.makeLike(cardId);
      console.log(card.getId())
    }) 
    .catch((err) => {
      console.log(`deleteLike - ошибка: ${err}`);
  })
  }, 
 
 
      },'.template', userId)
        
      cardsContainer.addItem(card.generateCard())
      
    
 }


 
 
 Promise.all([api.getUserApi(), api.getAllTodos()])
 .then(([item, data]) => {
  userId = item._id
  userInfo.setUserInfo(item);
  userInfo.setAvatar(item);

   data.forEach((data) => {
     ownerId = data.owner._id
     cardId = data._id
     likes = data.likes
    
     createCard(data)
   }
   )
   
   })
   



 




// Создаем попап редактирования профиля
const buttonEdit = document.querySelector(".profile__button_type_edit");

const formEdit = document.querySelector('[name="popup_form_submit"]');
const formAdd = document.querySelector('[name="popup_form_addCard"]');
const formAva = document.querySelector('[name="popup_form_Avatar"]');
const formDel = document.querySelector('[name="popup_form_del"]')
// Создаем попап добавлении карточки

const buttonAdd = document.querySelector(".profile__button_type_add");

const urlInput = formAdd.querySelector('[name="url"]');
const titleInput = formAdd.querySelector('[name="title"]');
const avatarInput = formAva.querySelector('[name="avatar"]')
const buttonAva =  document.querySelector('.avatar');

export const popupSelector = document.querySelector('.popup')
// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");


const cards = document.querySelector(".cards");

export const templateCard = document.querySelector("#template");
const popupSubmitButton = document.querySelector('[name="submitAdd"]')
const popupSubmitAva= document.querySelector('[name="submitAva"]')
const popupSubmitEdit= document.querySelector('[name="submitEdit"]')
const popupSubmitDel= document.querySelector('[name="submitDel"]')
export const inputName = document.querySelector('[name="name"]')
export const inputAbout = document.querySelector('[name="about"]')

const popupWithImage = new PopupWithImage({
  selector: '.popup_type_image'
})




popupWithImage.setEventListeners();

const userInfo = new UserInfo({ 
  name: '.profile__title',
  about: '.profile__text',
  avatar: '.profile__avatar'
});




const popupEditProfile = new PopupWithForm({
  selector: '.popup_type_edit', 
  submit: submitEdit, 
});
//открытие попапа информации о себе
buttonEdit.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidatoringEdit.disableButton();
  popupEditProfile.open();
});

function submitEdit (){

  popupSubmitEdit.textContent = 'Подождите...'

  api.setUserApi({
    name: inputName.value,
    about: inputAbout.value,
  }).then((name, about) => {
    userInfo.setUserInfo(name, about);
    popupEditProfile.close();
  })
  .catch((err) => {
    console.log(`setUserApi - ошибка: ${err}`);
  })
  .finally((data) =>{
   console.log(data)
   popupSubmitEdit.textContent = 'Сохранить'
  })
}

popupEditProfile.setEventListeners();

const popupFormCard = new PopupWithForm({
  selector: '.popup_type_add',
  submit: submitCard, 
     
})
//Открытие попапа добавления карточки
buttonAdd.addEventListener('click', () => {
  popupFormCard.open();
});

function submitCard(){
  console.log('sadasd')
  popupSubmitButton.textContent = 'Подождите...'

  api.createCard({
    name: titleInput.value,
    link: urlInput.value,
  }).then ((res) => {
    createCard(res)
    //должно было сработать, но не получилось(
    //cardsContainer.newItem(createCard(res)) 
    popupFormCard.close();
  })
  .finally(() =>{
    popupSubmitButton.textContent = 'Создать';
    titleInput.value = ''
    urlInput.value = ''
  })
  
  formAdd.reset();
 
}

popupFormCard.setEventListeners(); 


const popupFormAvatar = new PopupWithForm({
  selector: '.popup_type_ava',
  submit: submitAva,
})
buttonAva.addEventListener('click', () => {
  popupFormAvatar.open();
});

function submitAva(){

  popupSubmitAva.textContent = 'Подождите...'

  api.setUserAvatar({
    avatar: avatarInput.value,
  }).then((data) => {
    console.log(data)
    userInfo.setAvatar(data);
    popupFormAvatar.close();
  })
  .finally(() =>{
    popupSubmitAva.textContent = 'Сменить';
    avatarInput.value = '';
  })

}

popupFormAvatar.setEventListeners(); 


//


// Добавление карточки пользователем через кнопку ADD

const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input_type_error",
};

const formValidatoringEdit = new FormValidator(selectors, formEdit );
const formValidatoringAdd = new FormValidator(selectors, formAdd );
const formValidatoringAva = new FormValidator(selectors, formAva );
const formValidatoringDel = new FormValidator(selectors, formDel );

formValidatoringEdit.enableValidation();
formValidatoringAdd.enableValidation();
formValidatoringAva.enableValidation();
formValidatoringDel.enableValidation();



/*function createCard(data) {
  const card = new Card( data.name, data.link, data.owner, likes, userId, cardId, handleDeleteClick, handleSetLike, handleDeleteLike)
  
  cards.append(card.generateCard());
}*/
