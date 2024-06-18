import './App.css';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";
import {Homescreen} from './Screens/Homescreen/Homescreen';
import { Contactus } from './Screens/Contactus/Contactus';
import { Career } from './Screens/Career/Career';
import {Aboutus} from './Screens/Aboutus/Aboutus';






 function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Homescreen />} />
      <Route  path="/career" element={<Career />} />
      <Route  path="/aboutus" element={<Aboutus/>} />
      <Route  path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
