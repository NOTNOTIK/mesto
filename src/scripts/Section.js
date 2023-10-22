export class Section {
  constructor  ({renderer}){
  this._renderer = renderer;
  this._container = document.querySelector('.cards');
  }
  renderItems(){
   this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
  }
  addItem(element){
    this._container.append(element);
    
  }
  addNewItem(element){
    this._container.prepend(element);
    
  }
}
