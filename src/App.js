import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Analytics from "./Components/Analytics/Analytics";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
  // let navigate = useNavigate();
  return (
    <BrowserRouter>
      <div className="body-container">
          <Sidebar />
        <div className="home_content">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/user" element={<h1>User</h1>} />
            <Route path="/dashboard" element={<Dashboard /> } />
            <Route path="/analytics" element={<Analytics /> } />
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
