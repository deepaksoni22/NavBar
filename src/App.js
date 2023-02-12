import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <NavBar />
      <Route path={"/"} exact>
        <Home />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route path={"/contact"}>
        <Contact />
      </Route>
      <Route path={"/services"}>
        <Services />
      </Route>
    </>
  );
}

export default App;
