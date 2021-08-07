import SuperDom from './dom/SuperDom';

function createElement(tagName) {
  return document.createElement(tagName);
}

const dom = {
  div(...children) {
    return new SuperDom(createElement('div')).child(...children);
  },

  img(src, alt) {
    const native = createElement('img');

    native.src = src;
    native.alt = alt;

    const img = new SuperDom(native);

    return img;
  },

  table(value) {
    const table = new SuperDom(createElement('table'));

    for (const row of value.rows) {
      const tr = createElement('tr');
      for (const cell of row) {
        const td = createElement('td');
        td.append(cell);
        tr.append(td);
      }

      table.append(tr);
    }

    return table;
  },
};

const v = {
  header: [],
  rows: [[]],
};

export default dom;
