class Api{
  constructor({url, headers}){
    this._url = url;
    this._headers = headers;
  }
  _getResponse(response){
    if(response.ok){
      return response.json();
    }
    return Promise.reject( new Error('Ошибка'));
  }
  getAllTodos(){
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._getResponse)
    ;
  }
   getUserApi(){
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getResponse)
    
}
setUserApi(data){
  return fetch(`${this._url}/users/me`,{
    headers: this._headers,
    method: 'PATCH',
    body: JSON.stringify(data)
  }).then(this._getResponse)
}
setUserAvatar(data){
  return fetch(`${this._url}/users/me/avatar`,{
    headers: this._headers,
    method: 'PATCH',
    body: JSON.stringify(data)
  }).then(this._getResponse)
}
  createCard(data){
   return fetch(`${this._url}/cards`, {
  headers: this._headers,
  method: 'POST',
  body: JSON.stringify(data)
}).then(this._getResponse)

}
deleteCard(cardId){
  return fetch(`${this._url}/cards/${cardId}`, {
    headers: this._headers,
    method: 'DELETE'
  }).then(this._getResponse)
}

setLike(cardId){
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    headers: this._headers,
    method: 'PUT',
  }).then(this._getResponse)

  
}
deleteLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    headers: this._headers,
    method: 'DELETE',
  }).then(this._getResponse)
}

}

export default Api;

// https://mesto.nomoreparties.co/v1/cohort-74/