import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HRDashboard from "./pages/hr-dashboard";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
