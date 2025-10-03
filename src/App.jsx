import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
      <>
          <Navbar />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  {/*<Route path="/projects" element={<Projects />} />*/}
                  <Route path="/about" element={<About />} />
                  {/*<Route path="/contact" element={<Contact />} />*/}
              </Routes>
              <Footer />
          </main>

      </>
  )
}

export default App
