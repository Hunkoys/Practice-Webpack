
import './style.scss'
import Show from 'Utilities/show';
import App from './index/app';
import arrow from './index/footer';

const main = document.getElementById('main');

// import('./index/app').then(({ default: app }) => {
  // main.append(app);
  
// })

main.append(App, arrow)


Show('Hi sei')

import('./another').then(({default: another}) => another())

