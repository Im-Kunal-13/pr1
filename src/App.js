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
      <div className="body-container">
        <div>
          <Sidebar />
        </div>
        <div className="home_content">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />

            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
