import React from 'react';
import Home from './pages/home/home';
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App(){
  return(
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;