const Router = require('koa-router');
const queries = require('../db/queries/subdivisions');

const router = new Router();
const BASE_URL = `/api/v1/subdivisions`;

router.get(BASE_URL, async (ctx) => {
  try {
    const subdivisions = await queries.getAllSubdivisions();
    ctx.body = {
      status: 'success',
      data: subdivisions
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;