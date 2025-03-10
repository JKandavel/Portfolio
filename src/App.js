import React from "react"
import Home from "./routes/Home"
import Contact from "./routes/Contact"
import About from "./routes/About"
import {Route,Routes} from "react-router-dom"
export function App() {
  return (
   <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
   </>
  );
}


export default App;
