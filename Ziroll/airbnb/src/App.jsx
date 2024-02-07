import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./Constants";
function App() {
  console.log(data);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="cardRender">
        {data.map((item) => {
          return (
            <Card
              src={item.coverImg}
              stars={item.stats.rating}
              country={item.location}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
