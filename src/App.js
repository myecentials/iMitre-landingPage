import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";
import Deactivateaccount from "./components/deactivate_account";
import Reactivateaccount from "./components/reactivate_account";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
       exact
      element={<Homepage/>}
      />

      <Route 
      path='/deactivate_account'
       exact
      element={<Deactivateaccount/>}
      />

      <Route 
      path='/reactivate_account'
       exact
      element={<Reactivateaccount/>}
      />
      
      

      <Route 
      path='*'
       exact
      element={<Homepage/>}
      />
    

      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
