const Router = require('koa-router');
const queries = require('../db/queries/risks');

const router = new Router();
const BASE_URL = `/api/v1/risks`;

router.get(BASE_URL, async (ctx) => {
  try {
    const risks = await queries.getAllRisks();
    ctx.body = {
      status: 'success',
      data: risks
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;