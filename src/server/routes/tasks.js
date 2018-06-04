const Router = require('koa-router');
const queries = require('../db/queries/tasks');

const router = new Router();
const BASE_URL = `/api/v1/tasks`;

router.get(BASE_URL, async (ctx) => {
  try {
    const tasks = await queries.getAllTasks();
    ctx.body = {
      status: 'success',
      data: tasks
    };
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const tasks = await queries.getTasksByProject(ctx.params.id);
    if (tasks.length) {
      ctx.body = {
        status: 'success',
        data: tasks
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That tasks does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})



module.exports = router;