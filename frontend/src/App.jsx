import "./App.css";
import { Routes, Route } from "react-router-dom";    
import Footer from "./components/Partials/Footer.jsx";
import Header from "./components/Partials/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import List from "./components/Products/Lista/List.jsx";
import Detail from "./components/Products/Detail/Detail.jsx";
import AllUsers from "./components/Users/allUsers/AllUsers.jsx";
import LastUser from "./components/Users/lastUser/LastUser.jsx";

function App() {
  return (
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
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
