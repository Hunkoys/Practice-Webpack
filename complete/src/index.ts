import app from './index/app';
import './style.css'

app('hi app');


import('./another').then(({default: another}) => another())

