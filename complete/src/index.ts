import app from './index/app';
import './style.css'
import another from './another';

app('hi app');
another();

import('lodash').then(({default: _}) => console.log(_.join(['ab', 'no'], '-')))