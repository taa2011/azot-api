const Router = require('koa-router');
const queries = require('../db/queries/projects');

const router = new Router();
const BASE_URL = `/api/v1/projects`;

router.get(BASE_URL, async (ctx) => {
  try {
    const projects = await queries.getAllProjectsForList();
    ctx.body = {
      status: 'success',
      data: projects
    };
  } catch (err) {
    console.log(err)
  }
})

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const project = await queries.getSingleProject(ctx.params.id);
    if (project.length) {
      ctx.body = {
        status: 'success',
        data: project
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That project does not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    
    const project = await queries.addProject(ctx.request.body);
    if (project.length) {
      
      const projectN = await queries.getSingleProject(project[0]);
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: projectN
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

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const project = await queries.updateProject(ctx.params.id, ctx.request.body);
    if (project === 1) {
      const projectN = await queries.getSingleProject(ctx.params.id);
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: projectN
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That project does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: 'Sorry, an error has occurred.'
    };
  }
})


module.exports = router;