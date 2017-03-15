'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('blog', {
      url: '/blogs/:blogId',
      template: '<blog></blog>'
    });
}
