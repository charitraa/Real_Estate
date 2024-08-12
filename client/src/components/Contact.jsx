import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
          <p className="text-gray-700">
            Reach out to <span className="font-semibold text-indigo-600">{landlord.username} </span>
            about <span className="font-semibold text-indigo-600">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={message}
            onChange={onChange}
            placeholder="Type your message here..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-indigo-600 text-white text-center p-3 uppercase rounded-lg hover:bg-indigo-500 transition duration-200"
          >
            Send Message
          </Link>
        </div>
      )}
    </>

  );
}
