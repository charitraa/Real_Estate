import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden w-full sm:w-[350px]">
      <Link to={`/listing/${listing._id}`} className="block">
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt="listing cover"
          className="h-[250px] w-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 flex flex-col gap-3">
          <p className="text-lg font-bold text-gray-800 truncate">{listing.name}</p>
          <div className="flex items-center text-gray-600">
            <MdLocationOn className="h-5 w-5 text-indigo-600 mr-1" />
            <p className="text-sm truncate">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
          <p className="text-indigo-700 mt-3 text-lg font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString('en-US')
              : listing.regularPrice.toLocaleString('en-US')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className="flex gap-6 text-black mt-3">
            <div className="text-sm font-semibold">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Beds`
                : `${listing.bedrooms} Bed`}
            </div>
            <div className="text-sm font-semibold">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Baths`
                : `${listing.bathrooms} Bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
