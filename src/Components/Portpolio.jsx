import LeftPart from "./LeftPart";
import Navbar from "./Navbar";

function Portpolio() {
  return (
    <div className="main_container">
      <LeftPart />
      <div className="right_part">
        <Navbar />
      </div>{" "}
    </div>
  );
}

export default Portpolio;
