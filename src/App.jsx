import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <About />
      <Why />
      <Contact/>
      <Footer/>
    </div>
  )
}