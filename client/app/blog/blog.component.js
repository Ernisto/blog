'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './blog.routes';

export class BlogComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('blogApp.blog', [uiRouter])
  .config(routes)
  .component('blog', {
    template: require('./blog.html'),
    controller: BlogComponent,
    controllerAs: 'blogCtrl'
  })
  .name;
