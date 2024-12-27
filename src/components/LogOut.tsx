import React, { useEffect } from "react";

const LogOut = () => {
  localStorage.removeItem("token");
  useEffect(()=>{

  },[])
  return <div>LogOut</div>;
};

export default LogOut;
