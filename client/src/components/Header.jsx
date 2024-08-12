import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold flex items-center space-x-1">
            <span className="text-gray-600">Dhalal</span>
            <span className="text-gray-800">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-100 rounded-lg shadow-sm px-4 py-2"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-32 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2">
            <FaSearch className="text-gray-600" />
          </button>
        </form>
        <ul className="flex items-center space-x-6">
          <Link to="/">
            <li className="text-gray-800 hover:underline hidden sm:block">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-800 hover:underline hidden sm:block">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover border-2 border-gray-300 shadow-sm"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="text-gray-800 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>

  );
}
