const express = require('express');
const {
  getZaloUserInfo,
  createLeadFromZalo,
  validateZaloEnvironment,
  processZaloToken
} = require('../controllers/zaloController');
const { validateLead } = require('../middleware/validation');

const router = express.Router();

// Public routes for Zalo integration
router.get('/validate', validateZaloEnvironment);
router.post('/user-info', getZaloUserInfo);
router.post('/process-token', processZaloToken);
router.post('/create-lead', validateLead, createLeadFromZalo);

module.exports = router;
