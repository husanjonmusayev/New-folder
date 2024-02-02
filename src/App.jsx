import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Main from "./components/Main/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
