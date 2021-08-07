import SuperEvent from './superdom/SuperEvent';

function tryCast(value) {
  if (typeof value === 'number' || typeof value === 'boolean') return value.toString();
}

class SuperDom extends SuperEvent {
  constructor(element) {
    super(element);
  }

  id(value) {
    this.e.id = value;

    return this;
  }

  className(value) {
    this.e.className = value;

    return this;
  }

  empty() {
    while (this.e.firstChild) {
      this.e.lastChild.remove();
    }

    return this;
  }

  append(...children) {
    for (const child of children) {
      tryCast(child);

      if (child instanceof SuperDom) this.e.append(child.e);
      else if (typeof child === 'string' || child instanceof Node) this.e.append(child);
    }

    return this;
  }

  child(...children) {
    this.empty();
    this.append(...children);

    return this;
  }

  style(styleObject) {
    for (const prop in styleObject) {
      this.e.style[prop] = styleObject[prop];
    }

    return this;
  }
}

export default SuperDom;
