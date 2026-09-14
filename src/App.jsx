import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./myComponents/navbar/Navbar";
import { Home } from "./pages/home/Home";
import AddProject from "./pages/dashboard/AddProject";
import ProjectList from "./pages/dashboard/ProjectList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <div className="mt-[80px]">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/a" element={<AddProject />} />
          {/* <Route path="/" element={<Home />} /> */}
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
