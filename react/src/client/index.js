import { SuperDom } from 'Utilities/dom';
import Home from './app/Home';

const main = new SuperDom(document.querySelector('#main'));

main.append(Home);
