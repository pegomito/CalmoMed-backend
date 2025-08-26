const express = require('express');
const occupancyReportController = require('../controllers/occupancyReportController');
const router = express.Router();

router.get('/occupancy-reports', occupancyReportController.get);
router.post('/occupancy-reports', occupancyReportController.create);
router.patch('/occupancy-reports/:id', occupancyReportController.update);
router.delete('/occupancy-reports/:id', occupancyReportController.destroy);

module.exports = router;
