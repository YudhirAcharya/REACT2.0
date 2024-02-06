import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{ display: "flex" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
