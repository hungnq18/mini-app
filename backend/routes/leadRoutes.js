const express = require('express');
const {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
  convertLeadToUser,
  addNoteToLead,
  getLeadStats
} = require('../controllers/leadController');
const { protect, authorize } = require('../middleware/auth');
const { validateLead } = require('../middleware/validation');

const router = express.Router();

// Public routes
router.post('/', validateLead, createLead);

// Protected routes (require authentication)
router.use(protect);

// HR/Admin only routes
router.get('/', authorize('hr', 'admin'), getLeads);
router.get('/stats', authorize('hr', 'admin'), getLeadStats);
router.get('/:id', authorize('hr', 'admin'), getLeadById);
router.put('/:id', authorize('hr', 'admin'), updateLead);
router.delete('/:id', authorize('admin'), deleteLead);
router.post('/:id/convert', authorize('hr', 'admin'), convertLeadToUser);
router.post('/:id/notes', authorize('hr', 'admin'), addNoteToLead);

module.exports = router;
