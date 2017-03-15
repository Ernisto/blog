'use strict';

describe('Component: BlogComponent', function() {
  // load the controller's module
  beforeEach(module('blogApp.blog'));

  var BlogComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    BlogComponent = $componentController('blog', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
