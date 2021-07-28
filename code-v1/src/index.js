// import _ from 'lodash';

import eat from './print.js';

function isString(data) {
  return data instanceof String || typeof data === 'string';
}
class SuperDom {
  constructor(element) {
    this.e = element;
  }

  child(...children) {
    for (const child of children) {
      if (child instanceof SuperDom) this.e.append(child.e);
      else if (child instanceof Node || isString(child)) this.e.append(child);
    }

    return this;
  }

  onClick(task) {
    this.e.addEventListener('click', task);

    return this;
  }
}

const dom = {
  div(...children) {
    return new SuperDom(document.createElement('div')).child(...children);
  },
  button(...children) {
    return new SuperDom(document.createElement('button')).child(...children);
  },
};

const body = new SuperDom(document.getElementsByTagName('body')[0]);

const button = dom.button('Click Me').onClick((e) => {
  eat();
});

const app = dom.div('hello there ');

body.child('hi gago', app, button);
