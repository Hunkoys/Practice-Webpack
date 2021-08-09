import Felicia from './images/pictures/Felicia.png';
import iFelicia from './images/pictures/-i-Felicia.png';
import fFelicia from './images/-i-pictures/Felicia.png';

const App = document.createElement('div');

function img(src: string, alt: string) {
  const elem = document.createElement('img');
  elem.src = src;
  elem.alt = alt;
  
  return elem;
}

const inlineFelicia = img(iFelicia, 'inline');
const resourceFelicia = img(Felicia, 'resource')
const folderFelicia = img(fFelicia, 'resource')

App.append(inlineFelicia, resourceFelicia, folderFelicia);

export default App;
