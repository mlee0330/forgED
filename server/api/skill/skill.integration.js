'use strict';

var app = require('../..');
var request = require('supertest');

var newSkill;

describe('Skill API:', function() {

  describe('GET /api/skills', function() {
    var skills;

    beforeEach(function(done) {
      request(app)
        .get('/api/skills')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          skills = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(skills).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/skills', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/skills')
        .send({
          name: 'New Skill',
          info: 'This is the brand new skill!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newSkill = res.body;
          done();
        });
    });

    it('should respond with the newly created skill', function() {
      expect(newSkill.name).to.equal('New Skill');
      expect(newSkill.info).to.equal('This is the brand new skill!!!');
    });

  });

  describe('GET /api/skills/:id', function() {
    var skill;

    beforeEach(function(done) {
      request(app)
        .get('/api/skills/' + newSkill._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          skill = res.body;
          done();
        });
    });

    afterEach(function() {
      skill = {};
    });

    it('should respond with the requested skill', function() {
      expect(skill.name).to.equal('New Skill');
      expect(skill.info).to.equal('This is the brand new skill!!!');
    });

  });

  describe('PUT /api/skills/:id', function() {
    var updatedSkill

    beforeEach(function(done) {
      request(app)
        .put('/api/skills/' + newSkill._id)
        .send({
          name: 'Updated Skill',
          info: 'This is the updated skill!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSkill = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSkill = {};
    });

    it('should respond with the updated skill', function() {
      expect(updatedSkill.name).to.equal('Updated Skill');
      expect(updatedSkill.info).to.equal('This is the updated skill!!!');
    });

  });

  describe('DELETE /api/skills/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/skills/' + newSkill._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when skill does not exist', function(done) {
      request(app)
        .delete('/api/skills/' + newSkill._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
