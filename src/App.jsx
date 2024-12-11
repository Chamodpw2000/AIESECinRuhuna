import React from 'react';
import {BrowserRouter  , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import Apply from './Apply';

function App() {
  return (
    <div>
<BrowserRouter>


<Navbar />

<Routes>


<Route path = "/" element ={<Home/>}></Route>


<Route path = "/apply" element ={<Apply/>}></Route>








</Routes>

<Footer />




</BrowserRouter>
      

    </div>
  );
}

export default App;