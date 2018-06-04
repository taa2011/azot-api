const Koa = require('koa');
const bodyParser = require('koa-bodyparser');


const indexRoutes = require('./routes/index');
const contractorRoutes = require('./routes/contractors');
const subdivisionRoutes = require('./routes/subdivisions');
const staffRoutes = require('./routes/staff');
const projectStatusRoutes = require('./routes/projectStatuses');
const taskStatusRoutes = require('./routes/taskStatuses');
const projectRoutes = require('./routes/projects');
const multiRoutes = require('./routes/multi');
const teamRoutes = require('./routes/teams');
const riskRoutes = require('./routes/risks');
const taskRoutes = require('./routes/tasks');


const app = new Koa();
const PORT = process.env.PORT || 1338;



app.use(bodyParser());

app.use(indexRoutes.routes());
app.use(contractorRoutes.routes());
app.use(subdivisionRoutes.routes());
app.use(staffRoutes.routes());
app.use(projectStatusRoutes.routes());
app.use(taskStatusRoutes.routes());
app.use(projectRoutes.routes());
app.use(multiRoutes.routes());
app.use(teamRoutes.routes());
app.use(riskRoutes.routes());
app.use(taskRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;