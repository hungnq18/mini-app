const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Thông tin cơ bản
  name: {
    type: String,
    required: [true, 'Tên là bắt buộc'],
    trim: true,
    maxlength: [100, 'Tên không được quá 100 ký tự']
  },
  email: {
    type: String,
    required: [true, 'Email là bắt buộc'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ']
  },
  password: {
    type: String,
    required: [true, 'Mật khẩu là bắt buộc'],
    minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'],
    select: false // Không trả về password khi query
  },
  phone: {
    type: String,
    trim: true,
    match: [/^[0-9+\-\s()]+$/, 'Số điện thoại không hợp lệ']
  },
  birthYear: {
    type: Number,
    min: [1950, 'Năm sinh không hợp lệ'],
    max: [new Date().getFullYear(), 'Năm sinh không thể lớn hơn năm hiện tại']
  },

  // Vai trò và quyền hạn
  role: {
    type: String,
    enum: ['admin', 'hr', 'candidate'],
    default: 'candidate'
  },
  isActive: {
    type: Boolean,
    default: true
  },

  // Thông tin nghề nghiệp (cho candidate)
  qualification: {
    type: String,
    enum: ['high-school', 'college', 'bachelor', 'master', 'phd']
  },
  country: {
    type: String,
    enum: ['germany', 'japan', 'vietnam', 'all']
  },
  experience: {
    type: String,
    maxlength: [1000, 'Kinh nghiệm không được quá 1000 ký tự']
  },
  skills: [{
    type: String,
    trim: true
  }],
  expectedSalary: {
    type: Number,
    min: [0, 'Mức lương mong muốn không hợp lệ']
  },
  availableDate: Date,
  preferredLocation: String,
  languageSkills: [{
    language: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'native'],
      required: true
    }
  }],

  // Thông tin liên kết với Lead
  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lead'
  },

  // Thông tin bổ sung
  avatar: String,
  address: String,
  nationality: {
    type: String,
    default: 'Vietnamese'
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  maritalStatus: {
    type: String,
    enum: ['single', 'married', 'divorced', 'widowed']
  },

  // Thông tin xác thực
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,

  // Metadata
  lastLogin: Date,
  loginCount: {
    type: Number,
    default: 0
  },
  ipAddress: String,
  userAgent: String
}, {
  timestamps: true
});

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });
userSchema.index({ createdAt: -1 });

// Virtual for age calculation
userSchema.virtual('age').get(function() {
  if (this.birthYear) {
    return new Date().getFullYear() - this.birthYear;
  }
  return null;
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Hash password with cost of 12
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to check password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Instance method to get public profile
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.resetPasswordToken;
  delete userObject.resetPasswordExpires;
  delete userObject.emailVerificationToken;
  delete userObject.emailVerificationExpires;
  return userObject;
};

// Static method to find by email
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

module.exports = mongoose.model('User', userSchema);
