import print, { carl, growCarl } from './print';

print();

function isString(data: any) {
  return data instanceof String || typeof data === 'string';
}
class SuperDom {
  constructor(element: Element) {
    this.e = element;
  }

  e

  child(...children: any[]) {
    for (const child of children) {
      if (child instanceof SuperDom) this.e.append(child.e);
      else if (child instanceof Node || isString(child)) this.e.append(child);
    }

    return this;
  }

  onClick(task: any) {
    this.e.addEventListener('click', task);

    return this;
  }
}

const dom = {
  div(...children: any[]) {
    return new SuperDom(document.createElement('div')).child(...children);
  },
  button(...children: any[]) {
    return new SuperDom(document.createElement('button')).child(...children);
  },
};

function getDiv() {
  const element = dom.div();

  return element;
}

const body = new SuperDom(document.getElementsByTagName('body')[0]);

const button = dom.button('Click Me').onClick(() => {
  
});

const eatButton = dom.button('eat').onClick(() => {
  growCarl();
  console.log(carl);
});

console.log(carl);

// const app = dom.div(join(['Hi', 'tanglo'], ' '));

body.child('hi gago', button, eatButton);

console.log(process.env.NODE_ENV);
