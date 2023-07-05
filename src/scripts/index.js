import '../pages/index.css';
import { PopupWithForm } from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js'
import { UserInfo } from './UserInfo.js';
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import  {Section}  from "./Section.js";
import {dataCard} from './constants.js';


//import Popup from "./Popup.js";
// Создаем попап редактирования профиля
const buttonEdit = document.querySelector(".profile__button_type_edit");
const buttonCloseEdit = document.querySelector("#closeEdit");
const formEdit = document.querySelector('[name="popup_form_submit"]');
const formAdd = document.querySelector('[name="popup_form_addCard"]');
// Создаем попап добавлении карточки
const popupAdd = document.querySelector(".popup_type_add");
const buttonAdd = document.querySelector(".profile__button_type_add");
//const buttonCloseAdd = document.querySelector("#closeAdd");
const urlInput = formAdd.querySelector('[name="url"]');
const titleInput = formAdd.querySelector('[name="title"]');

export const popupSelector = document.querySelector('.popup')
// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");
//const buttonCloseImg = document.querySelector("#closeImg");
const cardImage = document.querySelector('.cards__img')
const cardTitle = document.querySelector('.cards__title')
const container = document.querySelector(".cards");
export const templateCard = document.querySelector("#template");

const popupWithImage = new PopupWithImage({
  selector: '.popup_type_image',
  popupImage: cardImage,
  figcaption: cardTitle

})


export function handleCardClick(data) { 
  popupWithImage.open(data);
};

popupWithImage.setEventListeners();



const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__text'
});

const popupEditProfile = new PopupWithForm({
  selector: '.popup_type_edit', 
  submit: (element) => {
    userInfo.setUserInfo(element);
    popupEditProfile.close();
  },
});
//открытие попапа информации о себе
buttonEdit.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidatoringEdit.disableButton();
  popupEditProfile.open();
});




popupEditProfile.setEventListeners();

const popupFormCard = new PopupWithForm({
  selector: '.popup_type_add',
  submit: () => {
    formValidatoringAdd.disableButton()
    popupFormCard.close();
  }
})
//Открытие попапа добавления карточки
buttonAdd.addEventListener('click', () => {
  popupFormCard.open();
});
formAdd.addEventListener('submit', () =>{
  createCard();
  formAdd.reset();
  popupFormCard.close();
})

popupFormCard.setEventListeners(); 

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

formValidatoringEdit.enableValidation();
formValidatoringAdd.enableValidation();

dataCard.forEach((item) => {
  const card = new Card(item.title, item.src);
  container.append(card.generateCard());
});

function createCard() {
  const card = new Card(titleInput.value, urlInput.value);
  container.prepend(card.generateCard());
}

const section = new Section(
  {
    items: dataCard,
    renderer: (item) =>{
      container.addItem(createCardItem(item));
    }
  }, container);
section.renderItems();

// Навешиваем на кнопки события

buttonCloseEdit.addEventListener("click", () =>  popupEditProfile.close());

