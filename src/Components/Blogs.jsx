import LeftPart from "./LeftPart";
import Navbar from "./Navbar";

function Blogs() {
  return (
    <div className="main_container">
      <LeftPart />
      <div className="right_part">
        <Navbar />
      </div>
    </div>
  );
}

export default Blogs;
