

export class FormValidator { 

  constructor(selectors, formElement) { 
    this._formElement = formElement; 
    this._selectors = selectors; 
  } 

 _showError(inputElement) { 
  //const inputElement = this._formElement.querySelector(this._selectors.inputSelector); 
    inputElement?.classList.add(this._selectors.inputErrorClass); 
    this._errorElement = this._formElement.querySelector(`#${inputElement?.name}-error`); 
    this._errorElement.textContent = inputElement?.validationMessage; 
  } 

  _hideError(inputElement) {
    inputElement.classList.remove(this._selectors.inputErrorClass);
    this._errorElement = this._formElement.querySelector(`#${inputElement?.name}-error`);
    this._errorElement.textContent = inputElement?.validationMessage;
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
    if (inputElement?.validity.valid) { 
      this._hideError(inputElement); 
    } else { 
      this._showError(inputElement); 
    } 
  }  

_setEventListener() { 
  this._inputsList = this._formElement.querySelectorAll(this._selectors.inputSelector); 
  this._submitButtonElement = this._formElement.querySelector(this._selectors.submitButtonSelector); 

  this._toggleButtonState(); 
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

 
