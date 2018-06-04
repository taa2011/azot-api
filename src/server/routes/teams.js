const Router = require('koa-router');
const queries = require('../db/queries/teams');

const router = new Router();
const BASE_URL = `/api/v1/teams`;


router.get(BASE_URL, async (ctx) => {
  try {
    const teams = await queries.getAllTeams();
    ctx.body = {
      status: 'success',
      data: teams
    };
  } catch (err) {
    console.log(err)
  }
})


router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const team = await queries.getTeamByProject(ctx.params.id);
    if (team.length) {
      ctx.body = {
        status: 'success',
        data: team
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That team does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    
    const team = await queries.addTeam (ctx.request.body);
    if (team.length) {
      
      const teamN = await queries.getSingleTeamItem(team[0]);
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: teamN
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err);
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const teamItem = await queries.deleteTeamItem(ctx.params.id);
    if (teamItem===1) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: teamItem
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That team does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


module.exports = router;