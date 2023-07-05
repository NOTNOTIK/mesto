// Массив с карточками
export const dataCard = [
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
export const popupEdit = document.querySelector(".popup_type_edit");
export const buttonEdit = document.querySelector(".profile__button_type_edit");
export const buttonCloseEdit = document.querySelector("#closeEdit");
export const profileName = document.querySelector(".profile__title");
export const profileText = document.querySelector(".profile__text");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_job");
export const formEdit = document.querySelector('[name="popup_form_submit"]');
export const formAdd = document.querySelector('[name="popup_form_addCard"]');
// Создаем попап добавлении карточки
export const popupAdd = document.querySelector(".popup_type_add");
export const buttonAdd = document.querySelector(".profile__button_type_add");
export const buttonCloseAdd = document.querySelector("#closeAdd");
export const urlInput = formAdd.querySelector('[name="url"]');
export const titleInput = formAdd.querySelector('[name="title"]');

export const popupSelector = document.querySelector('.popup')
// Создаем попап открывания фотокарточки
export const popupImg = document.querySelector(".popup_type_image");
export const popupImage = document.querySelector(".popup__image");
export const figcaption = document.querySelector(".popup__figcaption");
export const buttonCloseImg = document.querySelector("#closeImg");

export const container = document.querySelector(".cards");