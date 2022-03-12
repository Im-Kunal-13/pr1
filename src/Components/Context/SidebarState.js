import sidebarContext from "./sidebarContext";
import { useState, useEffect } from "react";

const SidebarState = (props) => {
  const [sidebarActiveState, setSidebarActiveState] = useState(false);
  const update = () => {
    setSidebarActiveState(!sidebarActiveState);
  };

  const [extraDashboardSpace, setExtraDashboardSpace] = useState(0)
  useEffect(() => {
    if(sidebarActiveState) {
      setExtraDashboardSpace(162)
    } else {
      setExtraDashboardSpace(0)
    }
  }, [sidebarActiveState])
  
  return (
    <sidebarContext.Provider value={{ sidebarActiveState, update, extraDashboardSpace}}>
      {props.children}
    </sidebarContext.Provider>
  );
};

export default SidebarState;
