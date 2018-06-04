const Router = require('koa-router');

const queriesStaff = require('../db/queries/staff');
const queriesSubdivisions = require('../db/queries/subdivisions');
const queriesContractors = require('../db/queries/contractors');
const queriesProjectStatuses = require('../db/queries/projectStatuses');


const router = new Router();

const BASE_URL = `/api/v1/multi`;

router.get(BASE_URL, async (ctx) => {
  try {
    const staff = await queriesStaff.getAllStaff();
    const subdivisions = await queriesSubdivisions.getAllSubdivisions();
    const contractors = await queriesContractors.getAllContractors();
    const projectStatuses = await queriesProjectStatuses.getAllProjectStatuses();
    ctx.body = {
      status: 'success',
      data: {
        staff: staff,
        subdivisions: subdivisions,
        contractors: contractors,
        projectStatuses: projectStatuses
      }
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;