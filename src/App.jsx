import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
