import angular from 'angular';

import {todo} from './app/todo';

import './index.scss';

export const app = 'app';

angular
  .module(app, [])
  .component('app', todo);
