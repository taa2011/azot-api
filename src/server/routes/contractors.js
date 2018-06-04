const Router = require('koa-router');
const queries = require('../db/queries/contractors');

const router = new Router();
const BASE_URL = `/api/v1/contractors`;

router.get(BASE_URL, async (ctx) => {
  try {
    const contractors = await queries.getAllContractors();
    ctx.body = {
      status: 'success',
      data: contractors
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;