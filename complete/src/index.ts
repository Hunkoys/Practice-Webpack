import app from './index/app';
import './style.scss'

const main = document.getElementById('main');


main.append(app);

import('./another').then(({default: another}) => another())

