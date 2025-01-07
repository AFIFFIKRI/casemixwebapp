import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Forgetpassword from './pages/ForgetPassword';
import PublicDashboard from './pages/public-dashboard/PublicDashboard';
import PatientDashboard from './pages/patient-dashboard/PatientDashboard';
import DoctorDashboard from './pages/doctor-dashboard/DoctorDashboard';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/public" element={<PublicDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
