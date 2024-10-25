import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/authentification/Login";
import ForgetPassword from "./components/authentification/ForgetPassword";
import SignUp from "./components/authentification/SignUp";
import Dashboard from "./components/Dashboard";
import DashboardPublic from "./components/DashboardPublic";
import HomePage from "./components/pages/HomePage";
import HomePagePublic from "./components/pages/HomePagePublic";
import CodingPage from "./components/pages/CodingPage";
import HospitalList from "./components/pages/HospitalList";
import PatientListPage from "./components/pages/PatientListPage";
import ProfilePage from "./components/pages/ProfilePage";
import HelpCenter from "./components/pages/HelpCenter";
import Faq from "./components/pages/Faq";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="coding" element={<CodingPage />} />
          <Route path="patient-list" element={<PatientListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="faq" element={<Faq />} />
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/dashboardpublic" element={<DashboardPublic />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="hospital-list" element={<HospitalList />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="faq" element={<Faq />} />
          <Route index element={<HomePagePublic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
