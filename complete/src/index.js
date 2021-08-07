import app from './index/app.js';
import SuperDom from './lib/dom/SuperDom.js';
import './style.css';

const main = new SuperDom(document.getElementById('main'));

main.child(app);
