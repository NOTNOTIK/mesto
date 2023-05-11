
//все элементы с классом popup
const popups = document.querySelectorAll(".popup");
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
const popupImg = document.querySelector(".popup_type_img");
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
  const likeButton = div.querySelector(".cards__like");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("cards__like_type_active");
  });

  cardImage.addEventListener("click", (evt) => {
    evt.preventDefault();
    popupImage.src = dataCard.src;
    figcaption.textContent = dataCard.title;
    openPopupImg();
  });
  return div;
};

const divCard = initialCards.map((dataCard) => {
  const cardElement = createCard(dataCard);
  return cardElement;
});
const renderCard = (dataCard) => {
  cardsContainer.prepend(createCard(dataCard));
};

cardsContainer.append(...divCard);

// Добавление карточки пользователем через кнопку ADD
const submitFormAdd = (evt) => {
  evt.preventDefault();
  const dataCard = {
    title: titleInput.value,
    src: urlInput.value,
  };
  formAdd.reset();
  closePopupAdd();
  renderCard(dataCard);
};

//попап редактирования
function openPopupEdit() {
  popupEdit.classList.toggle("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  formEdit.reset();
}
function closePopupEdit() {
  popupEdit.classList.toggle("popup_opened");
}
//попап добавления
function openPopupAdd() {
  popupAdd.classList.toggle("popup_opened");
}
function closePopupAdd() {
  popupAdd.classList.toggle("popup_opened");
}
// попап карточки
function openPopupImg() {
  popupImg.classList.toggle("popup_opened");
}
function closePopupImg() {
  popupImg.classList.toggle("popup_opened");
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
buttonCloseEdit.addEventListener("click", () => closePopupEdit());
formEdit.addEventListener("submit", formSubmitHandlerEdit)
buttonAdd.addEventListener("click", () => openPopupAdd());
buttonCloseAdd.addEventListener("click", () => closePopupAdd());
formAdd.addEventListener("submit", submitFormAdd);
buttonCloseImg.addEventListener("click", () => closePopupImg());

