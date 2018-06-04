const Router = require('koa-router');
const queries = require('../db/queries/projectStatuses');

const router = new Router();
const BASE_URL = `/api/v1/projectstatuses`;

router.get(BASE_URL, async (ctx) => {
  try {
    const projectStatuses = await queries.getAllProjectStatuses();
    ctx.body = {
      status: 'success',
      data: projectStatuses
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;