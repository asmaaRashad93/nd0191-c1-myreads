import "../App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {


  return (
    <Routes>
      <Route exact path="/" element={
        <Home />
      } />
      <Route exact path="/search" element={
        <Search />
      } />

    </Routes>
  )
}

export default App;
