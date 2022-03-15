import React, { useState } from "react";
import SidebarState from "./Components/Context/SidebarState";
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
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";

export default function App() {
  // let navigate = useNavigate();

  const [home_content, setHome_content] = useState(true);
  window.addEventListener("resize", () => {
    setHome_content(window.innerWidth < 1250 ? false : true);
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);
  });

  return (
    <SidebarState>
      <BrowserRouter>
        <div className="body-container">
          {home_content ? (
            <>
              <Sidebar />
              <div className="home_content">
                <Analytics />
                {/* <Routes>
                  <Route path="/" element={<Analytics />} />
                  <Route path="/analytics" element={<Analytics />} />
                </Routes> */}
                <Footer />
              </div>
            </>
          ) : (
            <h1>
              This website is currently under development and doesn't support
              screens of width less than 1100px
            </h1>
          )}
        </div>
      </BrowserRouter>
    </SidebarState>
  );
}
