const userRoute = require('./userRoute');
const postoRoute = require('./postoRoute');
const occupancyReportRoute = require('./occupancyReportRoute');

module.exports = (app) => {
  app.use('/api', userRoute);
  app.use('/api', postoRoute);
  app.use('/api', occupancyReportRoute);
};
