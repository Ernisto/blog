'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var blogCtrlStub = {
  index: 'blogCtrl.index',
  show: 'blogCtrl.show',
  create: 'blogCtrl.create',
  upsert: 'blogCtrl.upsert',
  patch: 'blogCtrl.patch',
  destroy: 'blogCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var blogIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './blog.controller': blogCtrlStub
});

describe('Blog API Router:', function() {
  it('should return an express router instance', function() {
    expect(blogIndex).to.equal(routerStub);
  });

  describe('GET /api/blogs', function() {
    it('should route to blog.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'blogCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/blogs/:id', function() {
    it('should route to blog.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'blogCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/blogs', function() {
    it('should route to blog.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'blogCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/blogs/:id', function() {
    it('should route to blog.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'blogCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/blogs/:id', function() {
    it('should route to blog.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'blogCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/blogs/:id', function() {
    it('should route to blog.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'blogCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
