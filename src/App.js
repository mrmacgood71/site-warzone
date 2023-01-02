import Main from "./components/main/Main";
import Menu from "./components/Menu";
import AssaultRifle from "./components/assaultrifle/AssaultRifle";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Footer from "./components/Footer";
import SubMachineGun from "./components/submachinegun/SubMachineGun";

function App() {

  let page =
      <Router>
          <Menu/>
        <div className="content">
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/assault-rifle" element={<AssaultRifle />} />
              <Route path="/submachine-gun" element={<SubMachineGun />} />
              <Route path="/transport" element={<Main />} />
          </Routes>

        </div>
          <Footer/>
      </Router>

  return page
}
export default App;
