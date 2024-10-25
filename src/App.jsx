import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen.jsx";
import Login from "./components/authentification/Login.jsx";
import ForgetPassword from "./components/authentification/ForgetPassword.jsx";
import SignUp from "./components/authentification/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import DashboardPublic from "./components/DashboardPublic.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import HomePagePublic from "./components/pages/HomePagePublic.jsx";
import CodingPage from "./components/pages/CodingPage.jsx";
import HospitalList from "./components/pages/HospitalList.jsx";
import PatientListPage from "./components/pages/PatientListPage.jsx";
import ProfilePage from "./components/pages/ProfilePage.jsx";
import HelpCenter from "./components/pages/HelpCenter.jsx";
import Faq from "./components/pages/Faq.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<SplashScreen />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="coding" element={<CodingPage />} />
          <Route path="patient-list" element={<PatientListPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="faq" element={<Faq />} />
          <Route index element={<HomePage />} />
        </Route>
        <Route path="dashboardpublic" element={<DashboardPublic />}>
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
