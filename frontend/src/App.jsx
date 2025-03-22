import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PoliceAdminDash from './components/PoliceAdminDash'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import CrimePage from './pages/CrimePage';
import DepartmentsPage from './pages/DepartmentsPage';
import LocationsPage from './pages/LocationsPage';
import VictimsPage from './pages/VictimsPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route element={<ProtectedRoute />}> */}
            {/* <Route element={<Layout />}> */}
              <Route path="/" element={<PoliceAdminDash />} />
              <Route path="/crimePage" element={<CrimePage />} />
              <Route path="/departmentsPage" element={<DepartmentsPage />} />
              <Route path="/locationsPage" element={<LocationsPage />} />
              <Route path="/victimPage" element={<VictimsPage />} />
            {/* </Route> */}
          {/* </Route> */}
        </Routes>
       </Router>
      {/* <PoliceAdminDash /> */}
    </>
  )
}

export default App




// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import PoliceAdminDash from './components/PoliceAdminDash';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   const isAuthenticated = localStorage.getItem("authToken"); // Check if user is logged in

//   return (
//     <Router>
//       <Routes>
//         {/* Redirect to dashboard if already logged in */}
//         <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
//         <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />} />
        
//         {/* Protect the dashboard route */}
//         <Route path="/" element={isAuthenticated ? <PoliceAdminDash /> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import PoliceAdminDash from './components/PoliceAdminDash';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
        
//         {/* Protected Route for PoliceAdmin */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/policeadmin" element={<PoliceAdminDash/>} />
//         </Route>

//         {/* Default Route */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

