
//все элементы с классом popup
const popupElement = document.querySelectorAll(".popup");
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
  const div = template.content.querySelector(".cards__item").cloneNode(true);
  const cardImage = div.querySelector(".cards__img");
  const cardTitle = div.querySelector(".cards__title");
  cardTitle.textContent = dataCard.title;
  cardImage.src = dataCard.src;
  cardImage.alt = `Изображение не загружено`
  div.querySelector(".cards__del").addEventListener("click", () => {
    div.remove();
  });
  const likeButton = div.querySelector(".cards__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("cards__like-button_active");
  });

  cardImage.addEventListener("click", (evt) => {
    evt.preventDefault();
    popupImage.src = dataCard.src;
    figcaption.textContent = dataCard.title;
    openPopup(popupImg);
  });
  return div;
};

const divList = initialCards.map((dataCard) => {
  const cardElement = createCard(dataCard);
  return cardElement;
});
const renderCard = (dataCard) => {
  cardsContainer.prepend(createCard(dataCard));
};

cardsContainer.append(...divList);

// Добавление карточки пользователем через кнопку ADD
const submitFormAdd = (evt) => {
  evt.preventDefault();
  const dataCard = {
    title: titleInput.value,
    src: urlInput.value,
  };
  formAdd.reset();
  closePopup(popupAdd);
  renderCard(dataCard);
};

//попап редактирования
function openPopupEdit() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
}
//функции открытия и закрытия попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}
/*Это закрытия попапа, при нажатии на кнопку "Сохранить"(данные профиля отредактированы) */
function formSubmitHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = `${nameInput.value}`;
  profileText.textContent = `${jobInput.value}`;
  closePopupEdit();
}

// Создаем карточку(Создаст столько карточек, сколько элементов в массиве)

// Навешиваем на кнопки события
buttonEdit.addEventListener("click", () => openPopupEdit());
buttonCloseEdit.addEventListener("click", () => closePopup(popupEdit));
formEdit.addEventListener("submit", formSubmitHandlerEdit)
buttonAdd.addEventListener("click", () => openPopup(popupAdd));
buttonCloseAdd.addEventListener("click", () => closePopup(popupAdd));
formAdd.addEventListener("submit", submitFormAdd);
buttonCloseImg.addEventListener("click", () => closePopup(popupImg));

