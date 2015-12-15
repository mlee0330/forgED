'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var skillCtrlStub = {
  index: 'skillCtrl.index',
  show: 'skillCtrl.show',
  create: 'skillCtrl.create',
  update: 'skillCtrl.update',
  destroy: 'skillCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var skillIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './skill.controller': skillCtrlStub
});

describe('Skill API Router:', function() {

  it('should return an express router instance', function() {
    expect(skillIndex).to.equal(routerStub);
  });

  describe('GET /api/skills', function() {

    it('should route to skill.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'skillCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/skills/:id', function() {

    it('should route to skill.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'skillCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/skills', function() {

    it('should route to skill.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'skillCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/skills/:id', function() {

    it('should route to skill.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'skillCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/skills/:id', function() {

    it('should route to skill.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'skillCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/skills/:id', function() {

    it('should route to skill.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'skillCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
