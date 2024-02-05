import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        width: "200px",
        height: "90vh",
        backgroundColor: "black",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
