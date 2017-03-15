'use strict';

describe('Service: blogService', function() {
  // load the service's module
  beforeEach(module('blogApp.blogService'));

  // instantiate service
  var blogService;
  beforeEach(inject(function(_blogService_) {
    blogService = _blogService_;
  }));

  it('should do something', function() {
    expect(!!blogService).to.be.true;
  });
});
