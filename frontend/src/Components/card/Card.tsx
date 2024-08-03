import React from 'react';
import './card.css'; // You'll create this file for styling

interface PropertyCardProps {
  imageUrl: string;
  price: string;
  title: string;
  location: string;
  date: string;
  rooms: string;
  bathrooms: string;
  size: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  price,
  title,
  location,
  date,
  rooms,
  bathrooms,
  size,
}) => {
  return (
    <div className="property-card">
      <img src={imageUrl} alt="Property" className="property-image" />
      <div className="property-details">
        <div className="property-price">{price}</div>
        <div className="property-title">{title}</div>
        <div className="property-location">{location}</div>
        <div className="property-date">{date}</div>
        <div className="property-features">
          <div className="property-feature">
            <i className="fa fa-bed"></i> {rooms}
          </div>
          <div className="property-feature">
            <i className="fa fa-bath"></i> {bathrooms}
          </div>
          <div className="property-feature">
            <i className="fa fa-expand"></i> {size}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
