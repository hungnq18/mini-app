import { useEffect, useState } from "react";
import { Box, Button, Icon, Page, Text } from "zmp-ui";
import apiService from "../services/api";

function HRDashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('leads');
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      
      // Load leads
      const leadsResponse = await apiService.getLeads({ limit: 10 });
      setLeads(leadsResponse.data.leads);
      
      // Load users
      const usersResponse = await apiService.getUsers({ limit: 10 });
      setUsers(usersResponse.data.users);
      
      // Load stats
      const leadStatsResponse = await apiService.getLeadStats();
      const userStatsResponse = await apiService.getUserStats();
      
      setStats({
        leads: leadStatsResponse.data,
        users: userStatsResponse.data
      });
      
    } catch (error) {
      console.error('Error loading data:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConvertLead = async (leadId) => {
    try {
      const response = await apiService.convertLeadToUser(leadId);
      
      if (response.success) {
        alert(`✅ Chuyển đổi thành công!\n\nUser ID: ${response.data.userId}\nEmail: ${response.data.email}\nMật khẩu tạm: ${response.data.tempPassword}`);
        loadData(); // Reload data
      }
    } catch (error) {
      console.error('Error converting lead:', error);
      alert(`❌ Lỗi: ${error.message}`);
    }
  };

  const handleLogout = () => {
    apiService.logout();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <Page className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Box className="flex items-center justify-center min-h-screen">
          <Text>Đang tải...</Text>
        </Box>
      </Page>
    );
  }

  if (error) {
    return (
      <Page className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <Box className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Text className="text-red-600 mb-4">Lỗi: {error}</Text>
            <Button onClick={loadData}>Thử lại</Button>
          </div>
        </Box>
      </Page>
    );
  }

  return (
    <Page className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <Box className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <Text.Title size="large" className="text-green-600">
                HR Dashboard
              </Text.Title>
              <Text className="text-gray-600">
                Quản lý tuyển dụng Hải Phong
              </Text>
            </div>
            <Button
              variant="secondary"
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      </Box>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Box className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center">
              <Icon icon="zi-users" size={24} className="text-blue-600 mr-3" />
              <div>
                <Text className="text-2xl font-bold text-gray-900">
                  {stats.leads?.totalLeads || 0}
                </Text>
                <Text className="text-gray-600">Tổng Leads</Text>
              </div>
            </div>
          </Box>
          
          <Box className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center">
              <Icon icon="zi-user-plus" size={24} className="text-green-600 mr-3" />
              <div>
                <Text className="text-2xl font-bold text-gray-900">
                  {stats.leads?.recentLeads || 0}
                </Text>
                <Text className="text-gray-600">Leads mới (7 ngày)</Text>
              </div>
            </div>
          </Box>
          
          <Box className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center">
              <Icon icon="zi-check-circle" size={24} className="text-purple-600 mr-3" />
              <div>
                <Text className="text-2xl font-bold text-gray-900">
                  {stats.leads?.convertedLeads || 0}
                </Text>
                <Text className="text-gray-600">Đã chuyển đổi</Text>
              </div>
            </div>
          </Box>
          
          <Box className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center">
              <Icon icon="zi-user" size={24} className="text-orange-600 mr-3" />
              <div>
                <Text className="text-2xl font-bold text-gray-900">
                  {stats.users?.totalUsers || 0}
                </Text>
                <Text className="text-gray-600">Tổng Users</Text>
              </div>
            </div>
          </Box>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('leads')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'leads'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Leads ({leads.length})
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'users'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Users ({users.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'leads' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Text.Title size="medium">Danh sách Leads</Text.Title>
                  <Button
                    size="small"
                    className="bg-green-600 text-white"
                    onClick={loadData}
                  >
                    Làm mới
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tên
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SĐT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trạng thái
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leads.map((lead) => (
                        <tr key={lead._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {lead.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lead.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lead.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                              lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                              lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                              lead.status === 'converted' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lead.status !== 'converted' && (
                              <Button
                                size="small"
                                className="bg-green-600 text-white"
                                onClick={() => handleConvertLead(lead._id)}
                              >
                                Chuyển đổi
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Text.Title size="medium">Danh sách Users</Text.Title>
                  <Button
                    size="small"
                    className="bg-green-600 text-white"
                    onClick={loadData}
                  >
                    Làm mới
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tên
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Vai trò
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Trạng thái
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ngày tạo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === 'admin' ? 'bg-red-100 text-red-800' :
                              user.role === 'hr' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {user.isActive ? 'Hoạt động' : 'Vô hiệu'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default HRDashboard;
