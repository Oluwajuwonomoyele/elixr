import { BrowserRouter as Router} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/DropdownMenu";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Hero slides={SliderData}/>
      </Router>
    </>
  );
}

export default App;
