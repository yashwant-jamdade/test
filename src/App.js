import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlankLayout from "./layout/blank/BlankLayout";
function App() {
  return (
    <>
      <h3>App</h3>
      <Routes>
        <Route path="/*" element={<BlankLayout />} />
      </Routes>
    </>
  );
}

export default App;
