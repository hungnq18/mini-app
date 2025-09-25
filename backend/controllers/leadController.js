const Lead = require('../models/Lead');
const User = require('../models/User');
const { validationResult } = require('express-validator');

// @desc    Create a new lead
// @route   POST /api/leads
// @access  Public
const createLead = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array()
      });
    }

    const {
      name,
      phone,
      email,
      birthYear,
      qualification,
      country,
      message,
      zaloInfo,
      source = 'website',
      ipAddress,
      userAgent
    } = req.body;

    // Optimized duplicate check with index
    const existingLead = await Lead.findOne({
      $or: [
        { phone: phone.trim() },
        { email: email.toLowerCase().trim() }
      ]
    }).select('_id status').lean();

    if (existingLead) {
      return res.status(400).json({
        success: false,
        message: 'Lead đã tồn tại với số điện thoại hoặc email này',
        data: {
          leadId: existingLead._id,
          status: existingLead.status
        }
      });
    }

    // Create new lead
    const lead = await Lead.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.toLowerCase().trim(),
      birthYear: birthYear ? parseInt(birthYear) : undefined,
      qualification,
      country,
      message: message ? message.trim() : '',
      zaloInfo: zaloInfo || {},
      source,
      ipAddress: req.ip || ipAddress,
      userAgent: req.get('User-Agent') || userAgent
    });

    res.status(201).json({
      success: true,
      message: 'Tạo lead thành công',
      data: {
        leadId: lead._id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        status: lead.status,
        createdAt: lead.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi tạo lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (HR/Admin only)
const getLeads = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      priority,
      assignedTo,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (assignedTo) filter.assignedTo = assignedTo;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const leads = await Lead.find(filter)
      .populate('assignedTo', 'name email')
      .populate('convertedToUser', 'name email')
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Lead.countDocuments(filter);

    res.json({
      success: true,
      data: {
        leads,
        pagination: {
          current: parseInt(page),
          pages: Math.ceil(total / parseInt(limit)),
          total,
          limit: parseInt(limit)
        }
      }
    });

  } catch (error) {
    console.error('Error getting leads:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy danh sách leads',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private (HR/Admin only)
const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('convertedToUser', 'name email')
      .populate('notes.createdBy', 'name email');

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lead'
      });
    }

    res.json({
      success: true,
      data: lead
    });

  } catch (error) {
    console.error('Error getting lead:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thông tin lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Private (HR/Admin only)
const updateLead = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Dữ liệu không hợp lệ',
        errors: errors.array()
      });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lead'
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');

    res.json({
      success: true,
      message: 'Cập nhật lead thành công',
      data: updatedLead
    });

  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi cập nhật lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin only)
const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lead'
      });
    }

    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Xóa lead thành công'
    });

  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi xóa lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Convert lead to user
// @route   POST /api/leads/:id/convert
// @access  Private (HR/Admin only)
const convertLeadToUser = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lead'
      });
    }

    if (lead.convertedToUser) {
      return res.status(400).json({
        success: false,
        message: 'Lead đã được chuyển đổi thành user'
      });
    }

    // Create user from lead data
    const userData = {
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      birthYear: lead.birthYear,
      qualification: lead.qualification,
      country: lead.country,
      experience: lead.additionalInfo?.experience || '',
      skills: lead.additionalInfo?.skills || [],
      expectedSalary: lead.additionalInfo?.expectedSalary,
      availableDate: lead.additionalInfo?.availableDate,
      preferredLocation: lead.additionalInfo?.preferredLocation,
      languageSkills: lead.additionalInfo?.languageSkills || [],
      leadId: lead._id,
      role: 'candidate'
    };

    // Generate temporary password
    const tempPassword = Math.random().toString(36).slice(-8);
    userData.password = tempPassword;

    const user = await User.create(userData);

    // Update lead status
    await lead.convertToUser(user._id);

    res.status(201).json({
      success: true,
      message: 'Chuyển đổi lead thành user thành công',
      data: {
        userId: user._id,
        email: user.email,
        tempPassword: tempPassword,
        leadId: lead._id
      }
    });

  } catch (error) {
    console.error('Error converting lead to user:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi chuyển đổi lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Add note to lead
// @route   POST /api/leads/:id/notes
// @access  Private (HR/Admin only)
const addNoteToLead = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || content.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Nội dung ghi chú không được để trống'
      });
    }

    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Không tìm thấy lead'
      });
    }

    await lead.addNote(content.trim(), req.user.id);

    res.json({
      success: true,
      message: 'Thêm ghi chú thành công'
    });

  } catch (error) {
    console.error('Error adding note to lead:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi thêm ghi chú',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

// @desc    Get lead statistics
// @route   GET /api/leads/stats
// @access  Private (HR/Admin only)
const getLeadStats = async (req, res) => {
  try {
    const stats = await Lead.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalLeads = await Lead.countDocuments();
    const recentLeads = await Lead.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });

    const convertedLeads = await Lead.countDocuments({
      status: 'converted'
    });

    res.json({
      success: true,
      data: {
        totalLeads,
        recentLeads,
        convertedLeads,
        statusBreakdown: stats
      }
    });

  } catch (error) {
    console.error('Error getting lead stats:', error);
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê leads',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error'
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  getLeadById,
  updateLead,
  deleteLead,
  convertLeadToUser,
  addNoteToLead,
  getLeadStats
};
