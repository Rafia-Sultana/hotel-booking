
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
    <div className="">
    <Router>
    <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/hotels' element={<List/>}></Route>
<Route path='/hotel/:id' element={<Hotel/>}></Route>
</Routes>
    </Router>


    </div>
  );
}

export default App;
