import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delivery01 from "./pages/Delivery01";
import Delivery02 from "./pages/Delivery02";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Delivery01 />} />
          <Route path="/" element={<Delivery02 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
