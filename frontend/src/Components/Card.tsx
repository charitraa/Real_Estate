import './card.css';
import room from '../assets/room.png';
const Card = () => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="image">
            <img src={room} alt="" />
          </div>
          <div className="content">
            <div className="money">290.000 $</div>
            <div className="status">Apartment for sale</div>
            <div className="place">London, Oxford St.</div>
            <div className="date">26 November 2020</div>
            <div className="icons">
              <div className="beds"></div>
              <div className="staires"></div>
              <div className="distance"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
