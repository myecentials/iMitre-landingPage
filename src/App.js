import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";

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
      path='*'
       exact
      element={<Homepage/>}
      />

      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
