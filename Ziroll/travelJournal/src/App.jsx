import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./constants";

function App() {
  return (
    <>
      <Navbar />
      {data.map((item) => {
        return <Card item={item} />;
      })}
    </>
  );
}

export default App;
