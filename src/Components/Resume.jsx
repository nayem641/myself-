import { useEffect } from "react";
import LeftPart from "./LeftPart";
import Navbar from "./Navbar";

function Resume() {
  useEffect(()=>{
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])
  return (
    <div className="main_container">
      <LeftPart />
      <div className="right_part">
        <Navbar />
        
      </div>
    </div>
  );
}

export default Resume;
