import Store from '../store';

export class Component extends HTMLElement {

  constructor(props = {}) {
    super();
    let self = this;
    this.render = this.render || function() {};
    if(props.store instanceof Store) {
      props.store.events.subscribe('stateChange', () => self.render());
    }
    if(props.hasOwnProperty('element')) {
      this.element = props.element;
    }
  };

  render() {
    return console.log(self);
  }
}