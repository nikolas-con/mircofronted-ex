import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

const DashbordApp = () => {
  console.log("sad");
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashbordApp;
