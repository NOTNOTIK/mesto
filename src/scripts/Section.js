export class Section {
  constructor  ({dataCard, renderer}){
this._dataCard = dataCard;
this._renderer = renderer;
this._container = document.querySelector('cards');
  }
  renderItems(){
    this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
  }
  addItem(element){
    this._container.append(element);
  }
}