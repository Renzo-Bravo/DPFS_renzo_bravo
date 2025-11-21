import "./App.css";
// 1. IMPORTAR Navigate
import { Routes, Route, Navigate } from "react-router-dom"; 
import Footer from "./components/Partials/Footer.jsx";
import Header from "./components/Partials/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import List from "./components/Products/Lista/List.jsx";
import Detail from "./components/Products/Detail/Detail.jsx";
import AllUsers from "./components/Users/allUsers/AllUsers.jsx";
import LastUser from "./components/Users/lastUser/LastUser.jsx";
import LoginForm from "./components/Users/Login/Login.jsx";
import RegisterForm from "./components/Users/Login/Register.jsx"; 

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="fullscreen-login-page">
            <LoginForm /> 
          </div>
        }
      />

      <Route
        path="/register"
        element={
          <div className="fullscreen-login-page">
            <RegisterForm />
          </div>
        }
      />

      <Route
        path="/*"
        element={
          <div className="container">
            <Header />
            <div className="Content">
              <Sidebar />

              <div className="mainContainer">
                <Routes> 
                  <Route path="/" element={<List />} />
                  <Route path="/products/:id" element={<Detail />} />
                  <Route path="/users" element={<AllUsers />} />
                  <Route path="/last-user" element={<LastUser />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} /> 
    </Routes>
  );
}

export default App;