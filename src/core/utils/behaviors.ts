const Clickable = superclass => class extends superclass {
  onClick =(e) => this.clickHandler(e);
};

const Selectable = superclass => class extends superclass {
  items: [];
  item: {};
  get currentItem(){
    return this.item;
  }
  set currentItem(value) {
    this.item = this.items.find(item => item == value)
  }
};

const Updatable = superclass => class extends superclass {
  onUpdate =(e) => this.updateHandler(e);
};