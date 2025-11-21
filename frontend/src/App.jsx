import "./App.css";
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
          <List />
          <Detail />
          <AllUsers />
          <LastUser />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
