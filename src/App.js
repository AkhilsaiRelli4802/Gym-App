import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Price from './Components/Pricingplans/price';
import Trainer from './Components/Trainers/Trainers';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
      <header style={{marginBottom:"40px"}}>
       <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to="/Home"></Navigate>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Price' element={<Price/>}/>
        <Route path='/Trainers' element={<Trainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
