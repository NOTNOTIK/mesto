
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
// Создаем попап редактирования профиля
const popupEdit = document.querySelector(".popup_type_edit");
const buttonEdit = document.querySelector(".profile__button_type_edit");
const buttonCloseEdit = document.querySelector("#closeEdit");
const profileName = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");
const formEdit = document.querySelector('[name="popup_form_submit"]');
const formAdd = document.querySelector('[name="popup_form_addCard"]');
// Создаем попап добавлении карточки
const popupAdd = document.querySelector(".popup_type_add");
const buttonAdd = document.querySelector(".profile__button_type_add");
const buttonCloseAdd = document.querySelector("#closeAdd");
const urlInput = formAdd.querySelector('[name="url"]');
const titleInput = formAdd.querySelector('[name="title"]');

// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");
const buttonCloseImg = document.querySelector("#closeImg");

const container = document.querySelector(".cards");
export const templateCard = document.querySelector("#template");

/*class Card {
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
}*/

dataCard.forEach((item) => {
  const card = new Card(item.title, item.src);
  const cardElement = card.generateCard();
  // Добавляем в DOM
  container.append(cardElement);
});

function createCard() {
   
  const card = new Card(titleInput.value, urlInput.value);
  const cardElement = card.generateCard();
  container.prepend(cardElement);
}
// Добавление карточки пользователем через кнопку ADD
const submitFormAdd = (evt) => {
  evt.preventDefault();
  createCard();
  formAdd.reset();
  closePopup(popupAdd);
};

//попап редактирования
function openPopupEdit() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}
const closePopupByOverlayClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};
const closePopupByEsc = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};
//функции открытия и закрытия попапа
export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  popupElement.addEventListener("click", closePopupByOverlayClick);
  document.addEventListener("keydown", closePopupByEsc);
}
function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  popupElement.removeEventListener("click", closePopupByOverlayClick);
  document.removeEventListener("keydown", closePopupByEsc);
}

/*Это закрытия попапа, при нажатии на кнопку "Сохранить"(данные профиля отредактированы) */
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEdit);
}



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

// Навешиваем на кнопки события
buttonEdit.addEventListener("click", () => openPopupEdit());
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
formEdit.addEventListener("submit", formEditSubmitHandler);
buttonAdd.addEventListener("click", () => openPopup(popupAdd));
buttonCloseAdd.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", submitFormAdd);
buttonCloseImg.addEventListener("click", () => closePopup(popupImg));
