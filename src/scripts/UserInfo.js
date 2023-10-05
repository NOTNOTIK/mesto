export class UserInfo{
     constructor(){
        this._userName = document.querySelector('.profile__title');
        this._userAbout = document.querySelector('.profile__text');
        this._avatar = document.querySelector('.profile__avatar');
     }
    getUserInfo(){
      return {
         name: this._userName.textContent,
         about: this._userAbout.textContent,
         avatar: this._avatar.src,
         
     };  
     }
     
      setUserInfo({name, about}) {
        this._userName.textContent = name;
        this._userAbout.textContent = about;
        
      }
   setAvatar({avatar}){
    this._avatar.src = avatar;
   }
}