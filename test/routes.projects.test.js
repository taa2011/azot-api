process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : projects', function () {
  this.timeout(15000);
  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest(); })
      .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /api/v1/projects', () => {

    it('should return all projects', (done) => {
      chai.request(server)
        .get('/api/v1/projects')
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 200 status code
          res.status.should.equal(200);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // key-value pair of {"data": [5 contractor objects]}
          res.body.data.length.should.eql(3);
          // the first object in the data array should
          // have the right keys
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'main_customer_text',
            'project_manager_text',
            'performer',
            'date_begin',
            'date_end',
            'date_fact_end',
            'total_cost',
            'project_status'
          );
          done();
        });
    });
  });

  describe('GET /api/v1/projects/:id', () => {
    it('should respond with a single project', (done) => {
      chai.request(server)
        .get('/api/v1/projects/1')
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 200 status code
          res.status.should.equal(200);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // key-value pair of {"data": 1 project object}
          res.body.data[0].should.include.keys(
            'id',
            'name',
            'main_customer',
            'project_manager',
            'is_internal_performer',
            'internal_performer',
            'external_performer',
            'effect',
            'date_begin',
            'date_end',
            'date_fact_end',
            'total_cost',
            'project_status'
          );
          done();
        });
    });

    it('should throw an error if the project does not exist', (done) => {
      chai.request(server)
        .get('/api/v1/projects/9999999')
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 404 status code
          res.status.should.equal(404);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a
          // key-value pair of {"message": "That project does not exist."}
          res.body.message.should.eql('That project does not exist.');
          done();
        });
    });

  });

  describe('POST /api/v1/projects', () => {
    it('should return the project that was added', (done) => {
      chai.request(server)
        .post('/api/v1/projects')
        .send({
          name: 'тестовый проект',
          main_customer: 'af7a8525-ae39-4862-830c-030bacf25e44',
          project_manager: '5780ce36-5319-4e9d-8c64-0354793d1659',
          is_internal_performer: '1',
          internal_performer: 'af7a8525-ae39-4862-830c-030bacf25e44',
          external_performer: '',
          effect: 'test',
          date_begin: '2018-05-15',
          date_end: '2018-05-20',
          date_fact_end: null,
          total_cost: '123',
          project_status: '1'
        })
        .end((err, res) => {
          // there should be no errors
          should.not.exist(err);
          // there should be a 201 status code
          // (indicating that something was "created")
          res.status.should.equal(201);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "success"}
          res.body.status.should.eql('success');
          // the JSON response body should have a
          // key-value pair of {"data": 1 project object}
          res.body.data[0].should.include.keys(
            "id",
            "name",
            "main_customer",
            "project_manager",
            "is_internal_performer",
            "internal_performer",
            "external_performer",
            "effect",
            "date_begin",
            "date_end",
            "date_fact_end",
            "total_cost",
            "project_status"

          );


          done();
        });
    });

    it('should throw an error if the payload is malformed', (done) => {
      chai.request(server)
        .post('/api/v1/projects')
        .send({
          name: 'test'
        })
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 400 status code
          res.status.should.equal(400);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a message key
          should.exist(res.body.message);
          done();
        });
    });
  });

  describe('PUT /api/v1/projects', () => {
    it('should return the project that was updated', (done) => {
      knex('projects')
        .select('*')
        .then((project) => {
          const projectObject = project[0];
          chai.request(server)
            .put(`/api/v1/projects/${projectObject.id}`)
            .send({
              name: 'ttttt'
            })
            .end((err, res) => {
              // there should be no errors
              should.not.exist(err);
              // there should be a 200 status code
              res.status.should.equal(200);
              // the response should be JSON
              res.type.should.equal('application/json');
              // the JSON response body should have a
              // key-value pair of {"status": "success"}
              res.body.status.should.eql('success');
              // the JSON response body should have a
              // key-value pair of {"data": 1 project object}
              res.body.data[0].should.include.keys(
                "id",
                "name",
                "main_customer",
                "project_manager",
                "is_internal_performer",
                "internal_performer",
                "external_performer",
                "effect",
                "date_begin",
                "date_end",
                "date_fact_end",
                "total_cost",
                "project_status"

              );
              // ensure the project was in fact updated
              const newprojectObject = res.body.data[0];
              newprojectObject.name.should.not.eql(projectObject.name);
              done();
            });
        });
    });

    it('should throw an error if the project does not exist', (done) => {
      chai.request(server)
        .put('/api/v1/projects/9999999')
        .send({
          name: 'asdff'
        })
        .end((err, res) => {
          // there should an error
          should.exist(err);
          // there should be a 404 status code
          res.status.should.equal(404);
          // the response should be JSON
          res.type.should.equal('application/json');
          // the JSON response body should have a
          // key-value pair of {"status": "error"}
          res.body.status.should.eql('error');
          // the JSON response body should have a
          // key-value pair of {"message": "That project does not exist."}
          res.body.message.should.eql('That project does not exist.');
          done();
        });
    });


  });


});