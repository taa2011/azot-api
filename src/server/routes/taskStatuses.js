const Router = require('koa-router');
const queries = require('../db/queries/taskStatuses');

const router = new Router();
const BASE_URL = `/api/v1/taskstatuses`;

router.get(BASE_URL, async (ctx) => {
  try {
    const taskStatuses = await queries.getAllTaskStatuses();
    ctx.body = {
      status: 'success',
      data: taskStatuses
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;