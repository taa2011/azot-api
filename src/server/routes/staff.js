const Router = require('koa-router');
const queries = require('../db/queries/staff');

const router = new Router();
const BASE_URL = `/api/v1/staff`;

router.get(BASE_URL, async (ctx) => {
  try {
    const staff = await queries.getAllStaff();
    ctx.body = {
      status: 'success',
      data: staff
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;