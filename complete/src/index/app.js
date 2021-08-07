import dom from '../lib/dom';
import felicia from './images/pictures/Felicia.png';
import table from './data/table.json';

const greeting = dom.div('Hi there').className('heading1');

const blackcat = dom.img(felicia, 'felicia hardy');

const tableElement = dom.table({ rows: table.content });

const app = dom.div(greeting, blackcat, tableElement).id('app');

export default app;
