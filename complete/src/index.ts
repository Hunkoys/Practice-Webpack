
import './style.scss'
import Show from 'Utilities/show';

const main = document.getElementById('main');

import('./index/app').then(({ default: app }) => {
  main.append(app);
  
})


Show('Hi sei')

import('./another').then(({default: another}) => another())

