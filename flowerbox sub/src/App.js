// @ts-nocheck
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import flowerList from './data/data.js';

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Banner />
        <div className="flower-cards">
          {
            flowerList?.map(flower=>(
              <Card flowerData={flower}/>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
