import '../pages/index.css';
const dataCard = [
  {
    title: "сухарики",
    src: "https://sun9-57.userapi.com/impg/vcmDnOoO0XlPESE2Bhm-JqqSRpYuCgb7nCI3uw/mE8jeQl8Wqk.jpg?size=454x454&quality=95&sign=21d49cd85f29de9dffc4e2e42efd349d&type=album",
  },
  {
    title: "",
    src: "https://sun9-51.userapi.com/impg/PAB7DFD1_2pbu_V2SgtsD4MDgQdWOoQkHTdbug/oIq_mld4ot8.jpg?size=244x248&quality=96&sign=0cc7193882fc2cb8df5c2d1ebf18ca7f&type=album",
  },
  {
    title: "",
    src: "https://sun9-26.userapi.com/impg/d0ZCHV9dZHWSSVSqQkF06CUOsj4G7sGrXaXcYw/OX6o5PYSMsA.jpg?size=278x276&quality=96&sign=a9913ddcc57fd0adc9dd589af1d847d2&type=album",
  },
  {
    title: "сухариков нет",
    src: "https://sun9-67.userapi.com/impg/KDUHHyUjkjQgLR6K8-NolvPIqdwZUV2hDhQV2g/ogXya5xQxRI.jpg?size=910x910&quality=96&sign=6889980148bcb98321e5234cf33b2423&type=album",
  },
  {
    title: "",
    src: "https://sun9-80.userapi.com/impg/k3WQ7vD1z0RmAseL7LH-gEvXsviltCHO1o-wrw/d1yxcdoPk6M.jpg?size=273x274&quality=96&sign=39d5ebc8c65930875d70097a604b3d79&type=album",
  },
  {
    title: "",
    src: "https://sun9-42.userapi.com/impg/KlqGltvZApZsGb8j-_obUK6SfNt7pmSMrvNg2Q/zfXFZ9i-qBM.jpg?size=278x276&quality=96&sign=a4447df5314f017f1b2c52fb3abbfe6a&type=album",
  },
];

//import { Popup } from './Popup.js';
//import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import  {Section}  from "./Section.js";
//import Popup from "./Popup.js";
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

export const popupSelector = document.querySelector('.popup')
// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");
const buttonCloseImg = document.querySelector("#closeImg");

const container = document.querySelector(".cards");
export const templateCard = document.querySelector("#template");


const popupFormCard = new PopupWithForm({
  selector: 'popup_type_add',
  submit: () => {
    formValidatoringAdd._disableButton();
    popupFormCard.close();
  }
})

buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd)
})

popupFormCard.setEventListeners();

const userInfo = new UserInfo({
  userName: ".profile__title",
  userJob: ".profile__text"
})

const popupEditProfile = new PopupWithForm({
  selector: 'popup_type_edit',
  submit: (item) => {
    userInfo.setUserInfo(item);
    popupEditProfile.close();
  }
});

buttonEdit.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidatoringEdit._disableButton();
  openPopup(popupEdit)
})
popupEditProfile.setEventListeners();

// Добавление карточки пользователем через кнопку ADD
const submitFormAdd = (evt) => {
  evt.preventDefault();
  createCard();
  formAdd.reset();
  closePopup(popupAdd);
};

//попап редактирования
/*function openPopupEdit() {
  openPopup(popupEdit)
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}*/
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

buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
formEdit.addEventListener("submit", formEditSubmitHandler);
buttonCloseAdd.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", submitFormAdd);
buttonCloseImg.addEventListener("click", () => closePopup(popupImg));
