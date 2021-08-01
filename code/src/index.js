import _ from 'lodash';

import prefetch from './prefetch.js';
// import eat from './print.js';

prefetch();

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

async function getDiv() {
  const { default: _ } = await import('lodash');

  const element = dom.div(_.join(['gago', 'gid', 'eh'], ' '));

  return element;
}

const body = new SuperDom(document.getElementsByTagName('body')[0]);

const button = dom.button('Click Me').onClick((e) => {
  getDiv().then((element) => {
    body.child(element);
  });
});

// const eatButton = dom.button('eat').onClick(et.abind(null, body));

// const app = dom.div(_.join(['Hi', 'tanglo'], ' '));

body.child('hi gago', button);
