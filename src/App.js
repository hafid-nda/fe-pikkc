import {BrowserRouter, Routes, Route} from "react-router-dom";
import DirectoryList from "./components/Directorylist";
import AddDirectory from "./components/AddDirectory";
import EditDirectory from "./components/EditDirectory";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<DirectoryList/>}/>
        <Route path="/dashboard/add" element={<AddDirectory/>}/>
        <Route path="/dashboard/add/edit/:id" element={<EditDirectory/>}/>
        <Route path="/" element={<><Navbar/> <Dashboard/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
