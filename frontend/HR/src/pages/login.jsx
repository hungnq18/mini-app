import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, Page, Text } from "zmp-ui";
import apiService from "../services/api";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Basic validation
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email là bắt buộc';
    if (!formData.password.trim()) newErrors.password = 'Mật khẩu là bắt buộc';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await apiService.login(formData.email, formData.password);
      
      if (response.success) {
        console.log('Login successful:', response.data);
        
        // Redirect to dashboard
        navigate('/hr-dashboard');
      } else {
        throw new Error(response.message || 'Đăng nhập thất bại');
      }
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: error.message || 'Đăng nhập thất bại. Vui lòng thử lại.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Box className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <Box className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Text.Title size="large" className="text-green-600 mb-2">
                ĐĂNG NHẬP HR
              </Text.Title>
              <Text className="text-gray-600">
                Hệ thống quản lý tuyển dụng Hải Phong
              </Text>
            </div>

            <form onSubmit={handleSubmit}>
              <Box className="mb-6">
                <Text className="mb-2 font-medium text-gray-700">Email</Text>
                <Input
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                {errors.email && (
                  <Text className="mt-1 text-red-500 text-sm">
                    {errors.email}
                  </Text>
                )}
              </Box>

              <Box className="mb-6">
                <Text className="mb-2 font-medium text-gray-700">Mật khẩu</Text>
                <Input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
                {errors.password && (
                  <Text className="mt-1 text-red-500 text-sm">
                    {errors.password}
                  </Text>
                )}
              </Box>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {errors.general}
                </div>
              )}

              <Button
                type="submit"
                size="large"
                className="w-full bg-green-600 text-white hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? 'ĐANG ĐĂNG NHẬP...' : 'ĐĂNG NHẬP'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Text className="text-sm text-gray-600">
                Liên hệ admin để được cấp tài khoản
              </Text>
            </div>
          </Box>
        </div>
      </Box>
    </Page>
  );
}

export default LoginPage;
