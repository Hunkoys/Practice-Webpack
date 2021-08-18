import dom from 'Utilities/dom';
import './Home.scss';

const heading = dom.div({ id: 'heading' }, 'Hi there');

const hero = dom.div({ id: 'hero' }, heading);

export default hero;
