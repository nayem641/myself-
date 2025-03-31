import "../styles/left.scss";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function LeftPart() {
  return (
    <div className="left_part">
      <div className="profile_section">
        <img src="/avatar.jpeg" alt="avatar" />
        <div className="hero_name">Imtiyaz Mahmud</div>
        <div className="profession">Web developer</div>
      </div>
      <hr />
      <div className="my_contact_section">
        <div className="card ">
          <div className="card_icon">
            <MdOutlineEmail className="email" />
          </div>
          <div className="card_content">
            <p>EMAIL</p>
            <p>imtiyazhosseinemon417@gmail.com</p>
          </div>
        </div>
        <div className="card ">
          <div className="card_icon">
            <IoIosPhonePortrait className="mobile" />
          </div>
          <div className="card_content">
            <p>MOBILE</p>
            <p>01614499328</p>
          </div>
        </div>
        <div className="card ">
          <div className="card_icon">
            <MdCalendarMonth className="dob" />
          </div>
          <div className="card_content">
            <p>DATE OF BIRTH</p>
            <p>13 January 1997</p>
          </div>
        </div>
        <div className="card ">
          <div className="card_icon">
            <IoLocationOutline className="address" />
          </div>
          <div className="card_content">
            <p>ADDRESS</p>
            <p>Lakshmipur, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="social_icons">
         <a href="#" className="facebook">
          <FaFacebook className="icon"/>
        </a>
        <a href="#" className="twitter">
          <FaTwitter className="icon"/>
        </a>
        <a href="#" className="instagram">
          <FaSquareInstagram className="icon"/>
        </a>
        <a href="#" className="github">
          <FaGithub className="icon"/>
        </a>

      </div>
    </div>
  );
}

export default LeftPart;
