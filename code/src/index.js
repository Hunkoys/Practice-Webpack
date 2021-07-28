// import _ from 'lodash';
import './style.css';
import { shoot } from '../common/shoot';
import Icon from './arrow.png';
import Data from './data.xml';
import Notes from './data.csv';
import Nick from './nick.json';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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

app.e.className = 'hello';
app.e.style.height = '500px';

body.child('hi gago', app);
shoot();
shoot();
console.log(Icon);
console.log(Data);
console.log(Notes);
console.log(Nick);
