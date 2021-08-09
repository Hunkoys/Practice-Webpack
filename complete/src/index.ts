import app from './index/app';
import './style.scss'
import Show from 'Utilities/show';

const main = document.getElementById('main');


main.append(app);

Show('Hi sei')

import('./another').then(({default: another}) => another())

