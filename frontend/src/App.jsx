import "./App.css";
import Footer from "./components/Partials/Footer.jsx";
import Header from "./components/Partials/Header.jsx";
import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import List from "./components/Products/Lista/List.jsx";
function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <div>
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
