import '../pages/index.css';
import { PopupWithForm } from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js'
import { UserInfo } from './UserInfo.js';
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

import Api from './api.js';







const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-74',
  headers : {
    authorization: '963e3d78-7c5d-4350-b514-b363b7d809d2',
    'Content-Type': 'application/json',
  }
}

export const api = new Api(apiConfig);
export const allCards = await api.getAllTodos();
export const getUserApi = await api.getUserApi();

 let ownerId = 0;
 let userId = 0;

/*Promise.all([ 
  api.getUserApi()
  .then((data) =>{
   userId = data._id
    userInfo.setUserInfo(data);
    userInfo.setAvatar(data);
  
  
  }),
  api.getAllTodos()
.then((data) => {
   
  data.forEach((item, data) => {
    ownerId = item._id
    userId = data._id
    userInfo.setUserInfo(data);
    userInfo.setAvatar(data);
    const card = new Card(item.name,  item.link, ownerId, userId)
    console.log(userId)
    container.append(card.generateCard());
  }
  )
})])
.then(([data]) => {
 
  
})*/
Promise.all([api.getUserApi(), api.getAllTodos()])
.then(([item, data]) => {
 
  userId = item._id
  userInfo.setUserInfo(item);
  userInfo.setAvatar(item);
  data.forEach((item) => {
    ownerId = item._id
    const card = new Card(item.name,  item.link, ownerId, userId)
    console.log(ownerId)
    container.append(card.generateCard());
  }
  )
  console.log(userId)
 
})












// Создаем попап редактирования профиля
const buttonEdit = document.querySelector(".profile__button_type_edit");

const formEdit = document.querySelector('[name="popup_form_submit"]');
const formAdd = document.querySelector('[name="popup_form_addCard"]');
const formAva = document.querySelector('[name="popup_form_Avatar"]');
const formDel = document.querySelector('[name="popup_form_del"]')
// Создаем попап добавлении карточки

const buttonAdd = document.querySelector(".profile__button_type_add");
//const buttonCloseAdd = document.querySelector("#closeAdd");
const urlInput = formAdd.querySelector('[name="url"]');
const titleInput = formAdd.querySelector('[name="title"]');
const avatarInput = formAva.querySelector('[name="avatar"]')
const buttonAva =  document.querySelector('.avatar');

export const popupSelector = document.querySelector('.popup')
// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");
//const buttonCloseImg = document.querySelector("#closeImg");

const container = document.querySelector(".cards");
export const templateCard = document.querySelector("#template");
const popupSubmitButton = document.querySelector('[name="submitAdd"]')
export const inputName = document.querySelector('[name="name"]')
export const inputAbout = document.querySelector('[name="about"]')

const popupWithImage = new PopupWithImage({
  selector: '.popup_type_image'
})


export function handleCardClick(data) { 
  popupWithImage.open(data);
  console.log(ownerId)
};

popupWithImage.setEventListeners();

const userInfo = new UserInfo({ 
  name: '.profile__title',
  about: '.profile__text',
  avatar: '.profile__avatar'
});


/*api.getUserApi({
  avatar: userInfo.avatar,
  name: userInfo.name,
  about: userInfo.about,
  _id: userInfo._id
  
}).then((element) =>{
  userInfo.setUserInfo(element);
  userInfo.setAvatar(element);
  console.log(element)
})*/


const popupEditProfile = new PopupWithForm({
  selector: '.popup_type_edit', 
  submit: (name, about) => {
    userInfo.setUserInfo(name, about);
    popupEditProfile.close();
  },
});
//открытие попапа информации о себе
buttonEdit.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidatoringEdit.disableButton();
  popupEditProfile.open();
});

formEdit.addEventListener('submit', () =>{

  //popupSubmitButton.textContent = 'Подождите...'

  api.setUserApi({
    name: inputName.value,
    about: inputAbout.value,
  }).then((data) => {
    console.log(data)
  })
  .finally((data) =>{
   // popupSubmitButton.textContent = 'Создать';
   console.log(data)
  })
  ;

 
 
  
  popupEditProfile.close();
 
})


popupEditProfile.setEventListeners();

const popupFormCard = new PopupWithForm({
  selector: '.popup_type_add',
  submit: () => {
    formValidatoringAdd.disableButton()
    popupFormCard.close();
  },
  
})
//Открытие попапа добавления карточки
buttonAdd.addEventListener('click', () => {
  popupFormCard.open();
});


formAdd.addEventListener('submit', () =>{

  popupSubmitButton.textContent = 'Подождите...'

  api.createCard({
    name: titleInput.value,
    link: urlInput.value,
  }).then((data) => {
    createCard(data)
  })
  .finally(() =>{
    popupSubmitButton.textContent = 'Создать';
    titleInput.value = ''
    urlInput.value = ''
  })
  ;
  formAdd.reset();
  popupFormCard.close();
 
})

popupFormCard.setEventListeners(); 


const popupFormAvatar = new PopupWithForm({
  selector: '.popup_type_ava',
  submit: () => {
    formValidatoringAva.disableButton()
    popupFormAvatar.close();
  },
})
buttonAva.addEventListener('click', () => {
  popupFormAvatar.open();
});
formAva.addEventListener('submit', () =>{

  popupSubmitButton.textContent = 'Подождите...'

  api.setUserAvatar({
    avatar: avatarInput.value,
  }).then((data) => {
    console.log(data)
    userInfo.setAvatar(data);
  })
  .finally(() =>{
    popupSubmitButton.textContent = 'Обновить';
    avatarInput.value = '';
  })
  

 
 
  
  popupFormAvatar.close();
 
})

popupFormAvatar.setEventListeners(); 


//


/*const popupDel = new  PopupWithForm({
  selector: '.popup_type_del',
  submit: () => {
    formValidatoringDel.enableButton();
    popupDel.close();
  },
  
  })


popupDel.setEventListeners(); 

export function handleDeleteClick() { 
  popupDel.open();
  
};*/


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




function createCard() {
  const card = new Card(titleInput.value, urlInput.value);
  container.prepend(card.generateCard());

}
