//import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creat from "./Component/Creat";
import Read from "./Component/Read";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Creat />}></Route>
          <Route path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
