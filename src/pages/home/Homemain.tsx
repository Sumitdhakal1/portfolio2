import reactlogo from "../../assets/react.svg";
import ui from "../../assets/ui.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGoogle, FaStackOverflow } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "../../styles/home/homemain.scss";
const Homemain = () => {
  return (
    <div className="container-2">
      <div className="home">
        <div className="bx bx-1">
          <img src={reactlogo} alt="" />
          <span className="name">I'm Sumit Dhakal</span>
          <span>Biography</span>
        </div>
        <div className="bx bx-2">
          <span className="t">Title</span>
          <span className="p">Product</span>
          <span className="d">Designe</span>
        </div>
        <div className="bx bx-3">
          <div className="l">
            <IoLogoLinkedin className="icon" />
            <IoLogoLinkedin className="icon" />
          </div>
          <div className="profile">
            <span className="pro">Profile</span>
            <IoArrowForwardCircleOutline className="arrow" />
          </div>
        </div>
        <div className="bx bx-4">
          <span>latest work and features</span>
        </div>
      </div>
      <div className="home-2">
        <div className=" bx bx-5">
          <div className="ap">
            <span className="s-1">Articles &</span>
            <span className="s-2">Publication</span>
          </div>
          <div className="blog">
            <span>Blog</span>
            <IoArrowForwardCircleOutline className="arrow" />
          </div>
        </div>
        <div className="bx bx-6">
          <h3>Services offering</h3>
          <ul>
            <li>
              <img src={ui} alt="" />
              <span>ui/ux designe</span>
            </li>
            <li>
              <img src={ui} alt="" />
              <span>ui/ux designe</span>
            </li>
            <li>
              <img src={ui} alt="" />
              <span>ui/ux designe</span>
            </li>
            <li>
              <img src={ui} alt="" />
              <span>ui/ux designe</span>
            </li>
          </ul>
          <h1>Things I'm good at</h1>
          <div className="services">
            <span>All Services</span>
            <IoArrowForwardCircleOutline className="arrow" />
          </div>
        </div>
        <div className="bx bx-7">
          <div className="det exp">
            <span className="num">0</span>
            <span>year experience</span>
          </div>
          <div className="det proj">
            <span className="num">0</span>
            <span>total projects</span>
          </div>
          <div className="det client">
            <span className="num">0</span>
            <span>clients worldwide</span>
          </div>
        </div>
      </div>
      <div className="home-3">
        <div className="bx bx-8">
          <h3>skills & tools</h3>
          <div className="skills">
            <span>desige</span>
            <span>interactive</span>
            <span>interactive</span>
            <span>desige</span>
            <span>interactive</span>
          </div>
          <div className="tools">
            <FaGoogle />
            <FaStackOverflow />
            <TbBrandVscode />
            <FaGoogle />
            <FaStackOverflow />
            <TbBrandVscode />
          </div>
        </div>
        <div className="bx bx-9">
          <span>work with</span>
          <span className="name">sumit dhakal</span>
          <div className="get">
            <span>get in touch</span>
            <IoArrowForwardCircleOutline className="arrow" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Homemain;
