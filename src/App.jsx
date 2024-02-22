import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StarDetails from "./components/StarDetails";
import Home from "./components/Home";

function App() {
  return (
    <>
            <Navbar/>
            <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='/star/:id' element={<StarDetails />}/>
            </Routes>
       
    </>
  );
}

export default App;
