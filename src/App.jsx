import React from 'react';
import {BrowserRouter  , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import Apply from './Apply';
import IGVMnIR from './Functions/IGVMnIR';
import IGVB2BnVD from './Functions/IGVB2BnVD';
import IGTMnIR from './Functions/IGTMnIR';
import IGTB2BnVD from './Functions/IGTB2BnVD';
import OGVPS from './Functions/oGVPS';
import OGVB2C from './Functions/oGVB2C';
import OGTB2C from './Functions/oGTB2C';
import OGTPS from './Functions/oGTPS';
import MKT from './Functions/MKT';
import PM from './Functions/PM';
import EM from './Functions/EM';
import PR from './Functions/PR';
import FnL from './Functions/F&L';
import BD from './Functions/BD';

function App() {
  return (
    <div>
<BrowserRouter>


<Navbar />

<Routes>


<Route path = "/" element ={<Home/>}></Route>


<Route path = "/apply" element ={<Apply/>}></Route>



<Route path = "/igvmnir" element ={<IGVMnIR/>}></Route>
<Route path = "/igvb2bnvd" element ={<IGVB2BnVD/>}></Route>
<Route path = "/igtmnir" element ={<IGTMnIR/>}></Route>
<Route path = "/igtb2bnvd" element ={<IGTB2BnVD/>}></Route>
<Route path = "/ogvps" element ={<OGVPS/>}></Route>
<Route path = "/ogvb2c" element ={<OGVB2C/>}></Route>
<Route path = "/ogtb2c" element ={<OGTB2C/>}></Route>
<Route path = "/ogtps" element ={<OGTPS/>}></Route>
<Route path = "/mkt" element ={<MKT/>}></Route>
<Route path = "/pm" element ={<PM/>}></Route>
<Route path = "/em" element ={<EM/>}></Route>
<Route path = "/pr" element ={<PR/>}></Route>
<Route path = "/Fnl" element ={<FnL/>}></Route>

<Route path = "/bd" element ={<BD/>}></Route>























</Routes>

<Footer />




</BrowserRouter>
      

    </div>
  );
}

export default App;