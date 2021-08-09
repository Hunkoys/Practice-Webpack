import app from './index/app';
import './style.css'

const main = document.getElementById('main');


main.append(app);

import('./another').then(({default: another}) => another())

