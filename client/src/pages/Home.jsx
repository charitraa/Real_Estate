import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col gap-8 p-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-gray-800 font-extrabold text-4xl lg:text-7xl">
          Discover Your <span className="text-indigo-600">Ideal</span> Home
          <br />
          with Confidence
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Dhalal offers a curated selection of properties to fit your needs.
          <br />
          Explore our extensive listings to find your perfect match.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-base text-indigo-700 font-semibold hover:underline transition duration-200"
        >
          Start Your Search Now...
        </Link>
      </div>

      {/* Swiper Section */}
      <Swiper navigation className="my-8">
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  backgroundImage: `url(${listing.imageUrls[0]})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-[600px] rounded-lg shadow-lg"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listings Section */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-12 my-12">
        {offerListings && offerListings.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">Recent Offers</h2>
              <Link
                className="text-base text-indigo-700 hover:underline transition duration-200"
                to="/search?offer=true"
              >
                View All Offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">Places for Rent</h2>
              <Link
                className="text-base text-indigo-700 hover:underline transition duration-200"
                to="/search?type=rent"
              >
                View All Rentals
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-700">Places for Sale</h2>
              <Link
                className="text-base text-indigo-700 hover:underline transition duration-200"
                to="/search?type=sale"
              >
                View All Sales
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
