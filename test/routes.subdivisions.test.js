process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : subdivisions', function() {
  this.timeout(15000);
  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('GET /api/v1/subdivisions', () => {
    
    it('should return all subdivisions', (done) => {
      chai.request(server)
      .get('/api/v1/subdivisions')
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
        // key-value pair of {"data": [5 subdivision objects]}
        res.body.data.length.should.eql(5);
        // the first object in the data array should
        // have the right keys
        res.body.data[0].should.include.keys(
          'id', 'guid', 'name',
        );
        done();
      });
    });
  });


});