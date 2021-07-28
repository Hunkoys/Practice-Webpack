// import _ from 'lodash';

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
}

const dom = {
  div(...children) {
    return new SuperDom(document.createElement('div')).child(...children);
  },
};

const body = new SuperDom(document.getElementsByTagName('body')[0]);

const app = dom.div('hello there');

body.child('hi gago', app);
