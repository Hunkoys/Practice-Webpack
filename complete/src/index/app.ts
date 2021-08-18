import smallArrow from 'Images/pictures/-i-small-arrow.png';
// import iFelicia from './images/pictures/-i-Felicia.png';
// import fFelicia from './images/-i-pictures/Felicia.png';
import extFelicia from 'Images/pictures/Felicia.png';

import img from './img';

import './app.scss';

const App = document.createElement('div');

const arrowImg = img(smallArrow, 'inline');
// const inlineFelicia = img(iFelicia, 'inline');
// const resourceFelicia = img(Felicia, 'resource')
// const folderFelicia = img(fFelicia, 'resource')
const externalFelicia = img(extFelicia, 'resource')

const greeting = document.createElement('h1');
greeting.className = 'greeting1 purple';
greeting.innerText = 'Hi there'

App.append(arrowImg, externalFelicia, greeting);

export default App;
