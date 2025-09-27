const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  // Thông tin cơ bản từ form đăng ký
  name: {
    type: String,
    required: [true, 'Tên là bắt buộc'],
    trim: true,
    maxlength: [100, 'Tên không được quá 100 ký tự']
  },
  phone: {
    type: String,
    required: [true, 'Số điện thoại là bắt buộc'],
    trim: true,
    match: [/^[0-9+\-\s()]+$/, 'Số điện thoại không hợp lệ']
  },
  email: {
    type: String,
    required: [true, 'Email là bắt buộc'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ']
  },
  birthYear: {
    type: Number,
    min: [1950, 'Năm sinh không hợp lệ'],
    max: [new Date().getFullYear(), 'Năm sinh không thể lớn hơn năm hiện tại']
  },
  qualification: {
    type: String,
    required: [true, 'Bằng cấp là bắt buộc'],
    enum: {
      values: ['high_school', 'college', 'university', 'postgraduate'],
      message: 'Bằng cấp không hợp lệ'
    }
  },
  country: {
    type: String,
    required: [true, 'Quốc gia mong muốn là bắt buộc'],
    enum: {
      values: ['germany', 'japan', 'vietnam', 'all'],
      message: 'Quốc gia không hợp lệ'
    }
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Tin nhắn không được quá 1000 ký tự']
  },

  // Thông tin từ Zalo
  zaloInfo: {
    phoneFromZalo: String,
    zaloUserId: String,
    zaloAccessToken: String,
    zaloRefreshToken: String
  },

  // Trạng thái và quản lý
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'unqualified', 'converted'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  notes: [{
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],

  // Liên kết với User (khi được chuyển đổi)
  convertedToUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  convertedAt: Date,

  // Thông tin bổ sung từ HR
  additionalInfo: {
    experience: String,
    skills: [String],
    expectedSalary: Number,
    availableDate: Date,
    preferredLocation: String,
    languageSkills: [{
      language: String,
      level: String
    }]
  },

  // Metadata
  source: {
    type: String,
    default: 'website',
    enum: ['website', 'zalo', 'facebook', 'referral', 'other']
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Optimized indexes for better performance
leadSchema.index({ phone: 1 }, { unique: true, sparse: true });
leadSchema.index({ email: 1 }, { unique: true, sparse: true });
leadSchema.index({ status: 1, createdAt: -1 });
leadSchema.index({ assignedTo: 1, status: 1 });
leadSchema.index({ source: 1, createdAt: -1 });
leadSchema.index({ country: 1, qualification: 1 });

// Virtual for age calculation
leadSchema.virtual('age').get(function() {
  if (this.birthYear) {
    return new Date().getFullYear() - this.birthYear;
  }
  return null;
});

// Methods
leadSchema.methods.addNote = function(content, createdBy) {
  this.notes.push({
    content,
    createdBy,
    createdAt: new Date()
  });
  return this.save();
};

leadSchema.methods.convertToUser = function(userId) {
  this.status = 'converted';
  this.convertedToUser = userId;
  this.convertedAt = new Date();
  return this.save();
};

module.exports = mongoose.model('Lead', leadSchema);
