const e_kind = {
  superdom: 'sd',
  node: 'n',
  element: 'e',
  string: 's',
  number: 'num',
};

function getKind(param) {
  if (param instanceof SuperDom) return e_kind.superdom;
  if (param instanceof Element) return e_kind.element;
  if (param instanceof Node) return e_kind.node;
  if (param instanceof String || typeof param === 'string') return e_kind.string;
  if (param instanceof Number || typeof param === 'number') return e_kind.number;
  return null;
}

function SuperDom(element) {
  this.e = element;

  this.empty = () => {
    while (this.e.firstChild) {
      this.e.lastChild.remove();
    }
  };

  this.append = (...children) => {
    for (const child of children) {
      const kind = getKind(child);
      switch (kind) {
        case e_kind.superdom:
          this.e.append(child.e);
          break;
        case e_kind.node:
        case e_kind.string:
        case e_kind.number:
          this.e.append(child);
          break;
      }
    }

    return this;
  };

  this.child = (...children) => {
    this.empty();
    this.append(...children);
    return this;
  };

  this.id = (id) => {
    this.e.id = id;
    return this;
  };

  this.className = (className) => {
    this.e.className = className;
    return this;
  };
}

const dom = {
  div({ id, className }, children) {
    return new SuperDom(document.createElement('div')).id(id).className(className).child(children);
  },
};

export default dom;
export { SuperDom };
