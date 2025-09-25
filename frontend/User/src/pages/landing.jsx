import React, { useCallback, useState } from "react";
import { getPhoneNumber, getUserInfo } from "zmp-sdk/apis";
import { Box, Button, Icon, Input, Page, Select, Text } from "zmp-ui";
import apiService from "../services/api";

function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    birthYear: "",
    qualification: "",
    country: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Optimized input change handler with useCallback
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  }, [errors]);

  // Optimized validation
  const validateBirthYear = (year) => {
    if (!year) return "";
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    
    if (isNaN(yearNum) || yearNum < 1950 || yearNum > currentYear) {
      return "Năm sinh không hợp lệ";
    }
    
    return "";
  };

  // Check if we can access Zalo APIs
  const checkZaloEnvironment = useCallback(() => {
    try {
      // Check if we're in a Zalo environment
      const isZalo = typeof window !== 'undefined' && 
        (window.ZaloWebApp || 
         window.parent?.ZaloWebApp || 
         navigator.userAgent.includes('Zalo') ||
         window.location.href.includes('zalo.me'));
      
      console.log('Zalo environment check:', {
        isZalo,
        hasZaloWebApp: !!(window.ZaloWebApp || window.parent?.ZaloWebApp),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      
      return isZalo;
    } catch (error) {
      console.error('Error checking Zalo environment:', error);
      return false;
    }
  }, []);

  // Optimized ZMP SDK API call with useCallback
  const getPhoneFromZalo = useCallback(async () => {
    console.log('=== ZMP SDK API CALL ===');
    
    // Check environment first
    const isZaloEnv = checkZaloEnvironment();
    if (!isZaloEnv) {
      alert('⚠️ Tính năng này chỉ hoạt động trong Zalo Mini App. Vui lòng nhập số điện thoại thủ công.');
      return;
    }
    
    try {
      // Try multiple approaches to get phone number
      console.log('Attempting to get phone number from ZMP SDK...');
      
      let phoneNumber = null;
      let userData = null;
      
      // Method 1: Try getPhoneNumber API
      try {
        console.log('Trying getPhoneNumber API...');
        const phoneData = await getPhoneNumber();
        console.log('getPhoneNumber result:', phoneData);
        
        if (phoneData) {
          // Check if we have phoneNumber directly
          if (phoneData.phoneNumber) {
            phoneNumber = phoneData.phoneNumber;
          } 
          // If we only have token, send it to backend for processing
          else if (phoneData.token) {
            console.log('Received token, processing with backend...');
            try {
              const tokenResult = await apiService.processZaloToken(phoneData.token);
              if (tokenResult.success && tokenResult.data.phone) {
                phoneNumber = tokenResult.data.phone;
                console.log('Phone number extracted from token:', phoneNumber);
              } else {
                console.log('Could not extract phone from token:', tokenResult);
                alert('❌ Không thể lấy số điện thoại từ token. Vui lòng nhập thủ công.');
                return;
              }
            } catch (tokenError) {
              console.error('Error processing token:', tokenError);
              alert('❌ Lỗi khi xử lý token. Vui lòng nhập số điện thoại thủ công.');
              return;
            }
          }
        }
      } catch (phoneError) {
        console.log('getPhoneNumber failed:', phoneError);
      }
      
      // Method 2: Try getUserInfo API if phone number not found
      if (!phoneNumber) {
        try {
          console.log('Trying getUserInfo API...');
          userData = await getUserInfo();
          console.log('getUserInfo result:', userData);
          
          if (userData) {
            phoneNumber = userData.phoneNumber || 
                         userData.phone || 
                         userData.number || 
                         userData.data?.phoneNumber ||
                         userData.data?.phone ||
                         userData.data?.number;
          }
        } catch (userError) {
          console.log('getUserInfo failed:', userError);
        }
      }
      
      if (phoneNumber) {
        setFormData(prev => ({
          ...prev,
          phone: phoneNumber 
        }));
        alert(`✅ Lấy số điện thoại thành công: ${phoneNumber}`);
      } else {
        console.log('No phone number found in any API response');
        console.log('User data available fields:', Object.keys(userData || {}));
        alert('❌ Không thể lấy số điện thoại từ Zalo. Vui lòng nhập thủ công.');
      }
    } catch (error) {
      console.error('Error getting phone number:', error);
      console.error('Error details:', {
        code: error.code,
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      // Handle different error types with more specific messages
      if (error.code === 'PERMISSION_DENIED' || error.message?.includes('permission') || error.message?.includes('PERMISSION_DENIED')) {
        alert(`🔑 CẦN CẤP QUYỀN TRUY CẬP

Ứng dụng cần quyền truy cập số điện thoại để tự động điền thông tin.

🔧 CÁCH CẤP QUYỀN:
1. Vào Zalo Developer Console (https://developers.zalo.me/)
2. Chọn ứng dụng của bạn
3. Vào mục "Cấu hình" > "Quyền truy cập"
4. Thêm quyền "user.phone" 
5. Lưu cấu hình và thử lại

📱 Link Zalo Mini App:
https://zalo.me/s/1396606563538150743/

💡 Sau khi cấp quyền, nhấn nút "Zalo" để lấy số điện thoại tự động.`);
      } else if (error.code === 'USER_DENIED' || error.message?.includes('USER_DENIED')) {
        alert('❌ Bạn đã từ chối cấp quyền truy cập số điện thoại. Vui lòng nhập số điện thoại thủ công.');
      } else if (error.code === 'SYSTEM_ERROR' || error.message?.includes('SYSTEM_ERROR')) {
        alert('❌ Lỗi hệ thống Zalo. Vui lòng thử lại sau hoặc nhập số điện thoại thủ công.');
      } else if (error.message?.includes('not supported') || error.message?.includes('unavailable')) {
        alert('⚠️ Tính năng này không khả dụng trong môi trường hiện tại. Vui lòng nhập số điện thoại thủ công.');
      } else if (error.message?.includes('not in Zalo')) {
        alert('⚠️ Tính năng này chỉ hoạt động trong Zalo Mini App. Vui lòng nhập số điện thoại thủ công.');
      } else {
        alert(`❌ Lỗi khi lấy số điện thoại: ${error.message || error.code || 'Không xác định'}

Vui lòng nhập số điện thoại thủ công.`);
      }
    }
    
    console.log('=== END ZMP SDK API CALL ===');
  }, []);

  // Function to get Vietnamese display text
  const getDisplayText = (field, value) => {
    if (!value) return '';
    
    const mappings = {
      qualification: {
        'high_school': 'Tốt nghiệp THPT',
        'college': 'Tốt nghiệp Cao đẳng',
        'university': 'Tốt nghiệp Đại học',
        'postgraduate': 'Sau Đại học'
      },
      country: {
        'vietnam': 'Việt Nam',
        'germany': 'Đức',
        'japan': 'Nhật Bản'
      }
    };
    
    return mappings[field]?.[value] || value;
  };

  // Optimized scroll to form function with useCallback
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    }
    
    const birthYearError = validateBirthYear(formData.birthYear);
    if (birthYearError) {
      newErrors.birthYear = birthYearError;
    }
    
    if (!formData.qualification) {
      newErrors.qualification = "Vui lòng chọn trình độ học vấn";
    }
    
    if (!formData.country) {
      newErrors.country = "Vui lòng chọn quốc gia";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Add Zalo environment info to form data
      const submitData = {
        ...formData,
        source: 'zalo',
        zaloInfo: {
          isZaloEnvironment: typeof window !== 'undefined' && !!window.ZaloWebApp,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        }
      };
      
      const response = await apiService.createLead(submitData);
      
      if (response.success) {
        alert("✅ Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          birthYear: "",
          qualification: "",
          country: "",
          message: ""
        });
        setErrors({});
      } else {
        alert(`❌ Lỗi: ${response.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("❌ Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Log environment info for debugging
  console.log('Environment check:', {
    hasWindow: typeof window !== 'undefined',
    hasZaloWebApp: typeof window !== 'undefined' && !!window.ZaloWebApp,
    hasZMP: typeof getPhoneNumber === 'function',
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'N/A'
  });

  return (
    <Page className="landing-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Box className="hero-content">
          <Text className="hero-title">
            Tập đoàn Hải Phong
          </Text>
          <Text className="hero-subtitle">
            Cơ hội việc làm tại Đức, Nhật Bản, Việt Nam
          </Text>
          <Text className="hero-description">
            Khám phá những cơ hội nghề nghiệp tuyệt vời với mức lương hấp dẫn và môi trường làm việc chuyên nghiệp
          </Text>
          <Button
            className="hero-cta-button"
            onClick={scrollToForm}
          >
            Đăng ký ngay
          </Button>
        </Box>
      </Box>

      {/* Statistics Section */}
      <Box className="stats-section">
        <Box className="stats-container">
          <Box className="stat-item">
            <Text className="stat-number">500+</Text>
            <Text className="stat-label">Ứng viên thành công</Text>
          </Box>
          <Box className="stat-item">
            <Text className="stat-number">50+</Text>
            <Text className="stat-label">Đối tác uy tín</Text>
            </Box>
          <Box className="stat-item">
            <Text className="stat-number">3</Text>
            <Text className="stat-label">Quốc gia</Text>
            </Box>
          <Box className="stat-item">
            <Text className="stat-number">95%</Text>
            <Text className="stat-label">Tỷ lệ thành công</Text>
            </Box>
            </Box>
      </Box>

      {/* About Us Section */}
      <Box className="about-section">
        <Box className="about-container">
          <Text className="section-title">Về chúng tôi</Text>
          <Text className="about-description">
            Tập đoàn Hải Phong là đơn vị chuyên nghiệp trong lĩnh vực phái cử lao động. 
            Với hơn 10 năm kinh nghiệm, chúng tôi đã giúp hàng nghìn ứng viên thực hiện ước mơ làm việc tại nước ngoài.
              </Text>
                <Button
            className="about-cta-button"
                  onClick={scrollToForm}
                >
            Tìm hiểu thêm
                </Button>
            </Box>
      </Box>

      {/* Services Section */}
      <Box className="services-section">
        <Box className="services-container">
          <Text className="section-title">Dịch vụ của chúng tôi</Text>
          <Box className="services-grid">
            <Box className="service-item">
              <Icon icon="zi-user" className="service-icon" />
              <Text className="service-title">Phái cử việc làm</Text>
              <Text className="service-description">
                Hỗ trợ tìm việc làm tại Đức, Nhật Bản với mức lương hấp dẫn
              </Text>
            </Box>
            <Box className="service-item">
              <Icon icon="zi-graduation" className="service-icon" />
              <Text className="service-title">Hỗ trợ 24/7</Text>
              <Text className="service-description">
                Sẵn sàng hỗ trợ các ứng viên 
              </Text>
            </Box>
            <Box className="service-item">
              <Icon icon="zi-certificate" className="service-icon" />
              <Text className="service-title">Đào tạo kỹ năng</Text>
              <Text className="service-description">
                Cung cấp các khóa học ngoại ngữ và kỹ năng nghề nghiệp
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Registration Form */}
      <Box id="registration-form" className="form-section">
        <Box className="form-container">
          <Text className="section-title">Đăng ký thông tin</Text>
          <Text className="form-description">
            Điền thông tin để nhận tư vấn miễn phí về cơ hội việc làm
          </Text>
          
          <form onSubmit={handleSubmit} className="registration-form">
            <Box className="form-row">
              <Box className="form-group">
                <Text className="form-label">Họ và tên *</Text>
                <Input
                  placeholder="Nhập họ và tên"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <Text className="error-text">{errors.name}</Text>}
              </Box>
              
              <Box className="form-group">
                <Text className="form-label">Số điện thoại *</Text>
                <Box className="phone-input-group">
                  <Input
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'error' : ''}
                  />
                  <Button
                    type="button"
                    className="zalo-button"
                    onClick={getPhoneFromZalo}
                  >
                    Zalo
                  </Button>
                </Box>
                {errors.phone && <Text className="error-text">{errors.phone}</Text>}
              </Box>
            </Box>

            <Box className="form-row">
              <Box className="form-group">
                <Text className="form-label">Email *</Text>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <Text className="error-text">{errors.email}</Text>}
              </Box>

              <Box className="form-group">
                <Text className="form-label">Năm sinh</Text>
                <Input
                  type="number"
                  placeholder="Nhập năm sinh"
                  value={formData.birthYear}
                  onChange={(e) => handleInputChange('birthYear', e.target.value)}
                  className={errors.birthYear ? 'error' : ''}
                />
                {errors.birthYear && <Text className="error-text">{errors.birthYear}</Text>}
              </Box>
            </Box>

            <Box className="form-row">
              <Box className="form-group">
                <Text className="form-label">Trình độ học vấn *</Text>
                <Select
                  placeholder="Chọn trình độ học vấn"
                  value={formData.qualification}
                  onChange={(value) => handleInputChange('qualification', value)}
                  className={errors.qualification ? 'error' : ''}
                >
                  <Select.Option value="high_school">Tốt nghiệp THPT</Select.Option>
                  <Select.Option value="college">Tốt nghiệp Cao đẳng</Select.Option>
                  <Select.Option value="university">Tốt nghiệp Đại học</Select.Option>
                  <Select.Option value="postgraduate">Sau Đại học</Select.Option>
                </Select>
                {formData.qualification && (
                  <Text className="selected-value">
                    Đã chọn: {getDisplayText('qualification', formData.qualification)}
                  </Text>
                )}
                {errors.qualification && <Text className="error-text">{errors.qualification}</Text>}
              </Box>

              <Box className="form-group">
                <Text className="form-label">Quốc gia quan tâm *</Text>
              <Select
                placeholder="Chọn quốc gia"
                value={formData.country}
                  onChange={(value) => handleInputChange('country', value)}
                  className={errors.country ? 'error' : ''}
                >
                  <Select.Option value="vietnam">Việt Nam</Select.Option>
                <Select.Option value="germany">Đức</Select.Option>
                <Select.Option value="japan">Nhật Bản</Select.Option>
              </Select>
              {formData.country && (
                  <Text className="selected-value">
                  Đã chọn: {getDisplayText('country', formData.country)}
                </Text>
              )}
                {errors.country && <Text className="error-text">{errors.country}</Text>}
            </Box>
            </Box>

            <Button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang gửi..." : "Đăng ký ngay"}
            </Button>
            </form>
        </Box>
      </Box>

      {/* Benefits Section */}
      <Box className="benefits-section">
        <Box className="benefits-container">
          <Text className="section-title">Lợi ích khi tham gia</Text>
          <Box className="benefits-grid">
            <Box className="benefit-item">
              <Icon icon="zi-money" className="benefit-icon" />
              <Text className="benefit-title">Mức lương hấp dẫn</Text>
              <Text className="benefit-description">
                Thu nhập từ 15-30 triệu/tháng tùy theo vị trí và kinh nghiệm
              </Text>
            </Box>
            <Box className="benefit-item">
              <Icon icon="zi-shield" className="benefit-icon" />
              <Text className="benefit-title">Bảo hiểm đầy đủ</Text>
              <Text className="benefit-description">
                Được hưởng đầy đủ các chế độ bảo hiểm xã hội và y tế
              </Text>
            </Box>
            <Box className="benefit-item">
              <Icon icon="zi-home" className="benefit-icon" />
              <Text className="benefit-title">Chỗ ở miễn phí</Text>
              <Text className="benefit-description">
                Hỗ trợ tìm kiếm và chi phí nhà ở trong thời gian đầu
              </Text>
            </Box>
            <Box className="benefit-item">
              <Icon icon="zi-plane" className="benefit-icon" />
              <Text className="benefit-title">Vé máy bay</Text>
              <Text className="benefit-description">
                Tài trợ vé máy bay và các chi phí di chuyển ban đầu
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Contact Section */}
      <Box className="contact-section">
        <Box className="contact-container">
          <Text className="section-title">Liên hệ với chúng tôi</Text>
          <Box className="contact-info">
            <Box className="contact-item">
              <Icon icon="zi-phone" className="contact-icon" />
              <Text className="contact-text">Hotline: 1900 1234</Text>
            </Box>
            <Box className="contact-item">
              <Icon icon="zi-mail" className="contact-icon" />
              <Text className="contact-text">Email: info@haiphong.com</Text>
            </Box>
            <Box className="contact-item">
              <Icon icon="zi-location" className="contact-icon" />
              <Text className="contact-text">Địa chỉ: Hải Phòng, Việt Nam</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}

// Export with React.memo for performance optimization
export default React.memo(LandingPage);