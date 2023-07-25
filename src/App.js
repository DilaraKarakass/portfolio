import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Products/>
      <Contact/>
    </div>
  );
}

export default App;
