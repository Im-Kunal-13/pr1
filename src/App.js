import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Project from "./Project";

export default function App() {
  // let navigate = useNavigate();
  return (
    <BrowserRouter>
      <Sidebar />
      {/* <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/projects/:projectname" element={<Project />} />
        <Route path="/use-navigate" element={<h1>UseNavigate</h1>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes> */}
    </BrowserRouter>
  );
}
