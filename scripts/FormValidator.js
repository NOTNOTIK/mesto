

export class FormValidator { 

  constructor(selectors, formElement) { 
    this._formElement = formElement; 
    this._selectors = selectors; 
  } 

 _showError(inputElement) { 
  //const inputElement = this._formElement.querySelector(this._selectors.inputSelector); 
    inputElement.classList.add(this._selectors.inputErrorClass); 
    this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`); 
    this._errorElement.textContent = inputElement.validationMessage; 
  } 

  _hideError(inputElement) {
    inputElement.classList.remove(this._selectors.inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    this._errorElement.textContent = inputElement.validationMessage;
  } 

  _disableButton(){ 
    this._submitButtonElement.disabled = true;
    this._submitButtonElement.classList.add(this._selectors.inactiveButtonClass);
  } 

  _enableButton(){
    this._submitButtonElement.disabled = false;
    this._submitButtonElement.classList.remove(this._selectors.inactiveButtonClass);
  } 

  _toggleButtonState() { 
    if (!this._formElement.checkValidity()){
      this._disableButton(); 
    } else { 
      this._enableButton();  
    }  
  } 

  _checkInputValidity(inputElement){ 
    if (inputElement.validity.valid) { 
      this._hideError(inputElement); 
    } else { 
      this._showError(inputElement); 
    } 
  }  

_setEventListener() { 
  this._inputsList = this._formElement.querySelectorAll(this._selectors.inputSelector); 
  this._submitButtonElement = this._formElement.querySelector(this._selectors.submitButtonSelector); 

  this._toggleButtonState(this._submitButtonElement, this); 
  this._formElement.addEventListener('submit', (event) => { 
    event.preventDefault(); 
  }) 
  this._formElement.addEventListener('reset', () => { 
  this._disableButton(this._submitButtonElement, this); 
  }) 

  this._inputsList.forEach((inputItem) => { 
   inputItem.addEventListener('input', () =>{ 
    this._checkInputValidity(); 
    this._toggleButtonState(this._submitButtonElement,  this); 
   }) 
  }) 
  this._toggleButtonState(this._submitButtonElement,  this); 
} 

 enableValidation() { 
  this._setEventListener(); 
  this._toggleButtonState(this._submitButtonElement,  this);
  this._inputsList.forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      this._checkInputValidity(inputItem);
      this._toggleButtonState(this._submitButtonElement,  this);
    });
  })
  
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
