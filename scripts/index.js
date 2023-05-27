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
const popupImg = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const figcaption = document.querySelector(".popup__figcaption");
const buttonCloseImg = document.querySelector("#closeImg");

const cardsContainer = document.querySelector(".cards");
const template = document.querySelector("#template");

// создаем карточки
const createCard = (dataCard) => {
  const newCard = template.content
    .querySelector(".cards__item")
    .cloneNode(true);
  const cardImage = newCard.querySelector(".cards__img");
  const cardTitle = newCard.querySelector(".cards__title");
  cardTitle.textContent = dataCard.title;
  cardImage.src = dataCard.src;
  cardImage.alt = dataCard.title;
  newCard.querySelector(".cards__del").addEventListener("click", () => {
    newCard.remove();
  });
  const likeButton = newCard.querySelector(".cards__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("cards__like-button_active");
  });

  cardImage.addEventListener("click", () => {
    popupImage.src = dataCard.src;
    figcaption.textContent = dataCard.title;
    openPopup(popupImg);
  });
  return newCard;
};

const newCardsList = initialCards.map((dataCard) => {
  const cardElement = createCard(dataCard);
  return cardElement;
});
const renderCard = (dataCard) => {
  cardsContainer.prepend(createCard(dataCard));
};

cardsContainer.append(...newCardsList);

// Добавление карточки пользователем через кнопку ADD

const popupSubmit = document.querySelectorAll(".popup__submit");

const submitFormAdd = (evt) => {
  evt.preventDefault();
  const dataCard = {
    title: titleInput.value,
    src: urlInput.value,
  };
  formAdd.reset();
  renderCard(dataCard);
  closePopup(popupAdd);
  toggleButtonState(submitButtonElement, config)
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
function openPopup(popupElement) {
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

// Создаем карточку(Создаст столько карточек, сколько элементов в массиве)

// Навешиваем на кнопки события
buttonEdit.addEventListener("click", () => openPopupEdit(popupAdd));
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
formEdit.addEventListener("submit", formEditSubmitHandler);
buttonAdd.addEventListener("click", () => openPopup(popupAdd));
buttonCloseAdd.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", submitFormAdd);
buttonCloseImg.addEventListener("click", () => closePopup(popupImg));
