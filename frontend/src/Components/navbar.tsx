import './navbar.css';
import logo from '../assets/logo.png';
const navbar = () => {
  return (
    <>
      <div className="naviagtion">
        <div className="container">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav-link">
              <a href="#">For Sale</a>
              <a href="#">For Rent</a>
              <a href="#">Daily Rental</a>
              <a href="#">Projects</a>
            </div>
          </div>
          <div className="right">
            <div className="btn">Advertise</div>
            <div className="icon">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
