export class FormValidator {
  constructor(selectors, formElement) {
    this._formElement = formElement;
    this._selectors = selectors;
  }
 _showError() {
  const inputElement = this._formElement.querySelector(this._selectors.inputSelector);
    inputElement.classList.add(this._selectors.inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    this._errorElement.textContent = inputElement.validationMessage;
  }
  _hideError() {
    const inputElement = this._formElement.querySelector(this._selectors.inputSelector);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    this._errorElement.textContent = inputElement.validationMessage;
  }
  _disableButton(buttonElement){
  buttonElement.disabled = true;
  buttonElement.classList.add(this._selectors.inactiveButtonClass);
  }
  _enableButton(buttonElement){
  buttonElement.disabled = false;
  buttonElement.classList.remove(this._selectors.inactiveButtonClass);
  }
  _toggleButtonState(buttonElement, isActive) {
  if (!isActive) {
    this._disableButton(buttonElement);
  } else {
    this._enableButton(buttonElement);
  }
  }
  _checkInputValidity(){
    const inputElement = this._formElement.querySelector(this._selectors.inputSelector);
    if (inputElement.validity.valid) {
      this._hideError();
    } else {
      this._showError();
    }
  }
_setEventListener() {
  this._inputsList = this._formElement.querySelectorAll(this._selectors.inputSelector);
  this._submitButtonElement = this._formElement.querySelector(this._selectors.submitButtonSelector);
 
  this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity(), this);
  this._formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  })
  this._formElement.addEventListener('reset', () => {
  this._disableButton(this._submitButtonElement/*, this._formElement.checkValidity(), this*/);
  })
  this._inputsList.forEach((inputItem) => {
   inputItem.addEventListener('input', (inputElement) =>{
    this._checkInputValidity(inputElement);
    this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity(), this);
   })
  })
  this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity(), this);
}
 enableValidation(){
  const forms = document.querySelectorAll('.popup__form');
  forms.forEach((formItem) => {
   this._setEventListener(formItem)
  });
 }
}

/*function showError(inputElement, errorElement, config) {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function disableButton(buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}
function enableButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disableButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
}
function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

  if (!isInputValid) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
}

function setEventListener(formElement, config) {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButtonElement = formElement.querySelector(
    config.submitButtonSelector
  );

  toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  formElement.addEventListener("reset", () => {
    disableButton(submitButtonElement, config);
  });
  inputsList.forEach((inputItem) => {
    inputItem.addEventListener("input", () => {
      checkInputValidity(inputItem, formElement, config);
      toggleButtonState(submitButtonElement,formElement.checkValidity(),config);
    });
  });
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach((formItem) => {
    setEventListener(formItem, config);
  });
}
*/


