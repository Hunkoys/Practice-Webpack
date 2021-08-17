// import Felicia from './images/pictures/Felicia.png';
// import iFelicia from './images/pictures/-i-Felicia.png';
// import fFelicia from './images/-i-pictures/Felicia.png';
import extFelicia from 'Img/Felicia.png';

import './app.scss';

const App = document.createElement('div');

function img(src: string, alt: string) {
  const elem = document.createElement('img');
  elem.src = src;
  elem.alt = alt;
  
  return elem;
}

// const inlineFelicia = img(iFelicia, 'inline');
// const resourceFelicia = img(Felicia, 'resource')
// const folderFelicia = img(fFelicia, 'resource')
const externalFelicia = img(extFelicia, 'resource')

const greeting = document.createElement('h1');
greeting.className = 'greeting1 purple';
greeting.innerText = 'Hi there'

App.append(externalFelicia, greeting);

export default App;
