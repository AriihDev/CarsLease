import NavBar from "./Components/Layout/NavBar";
import NewClient from "./Pages/NewClient";
import {Routes , Route} from "react-router-dom";
import AllCars from "./Pages/AllCars";
import AllClients from "./Pages/AllClients";
import NewCar from "./Pages/NewCar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import NewContractForm from "./Components/Contract/NewContractForm";
import AllContracts from "./Pages/AllContracts";
import FindCar from "./Pages/FindCar";
import FindClient from "./Pages/FindClient";
import FindContract from "./Pages/FindContract";


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path = '/' element= {<Home/>}></Route>
        <Route path = '/about' element= {<About/>}></Route>

        <Route path = '/cars' element= {<AllCars/>}></Route>
        <Route path = '/newcar' element= {<NewCar/>}></Route>
        <Route path = '/findcar' element= {<FindCar/>}></Route>

        <Route path = '/clients' element= {<AllClients/>}></Route>
        <Route path = '/newclient' element= {<NewClient/>}></Route>
        <Route path="/findclient" element={<FindClient />}></Route>

        <Route path = '/newcontract' element= {<NewContractForm/>}></Route>
        <Route path = '/contracts' element= {<AllContracts/>}></Route>
        <Route path='/findcontract' element={<FindContract/>}></Route>
        
        <Route path = '*' element= {<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
