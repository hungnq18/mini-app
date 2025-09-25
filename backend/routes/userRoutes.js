const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  changeUserPassword,
  resetUserPassword,
  getUserStats,
  getUsersByHR
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');
const { validateUser } = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(protect);

// HR/Admin only routes
router.get('/', authorize('hr', 'admin'), getUsers);
router.get('/stats', authorize('hr', 'admin'), getUserStats);
router.get('/hr/:hrId', authorize('hr', 'admin'), getUsersByHR);
router.get('/:id', authorize('hr', 'admin'), getUserById);
router.post('/', authorize('admin'), validateUser, createUser);
router.put('/:id', authorize('hr', 'admin'), updateUser);
router.delete('/:id', authorize('admin'), deleteUser);
router.put('/:id/password', authorize('hr', 'admin'), changeUserPassword);
router.put('/:id/reset-password', authorize('admin'), resetUserPassword);

module.exports = router;
