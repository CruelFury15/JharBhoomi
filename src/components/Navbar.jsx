import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    setShowUserMenu(false);
    props.onLogout();
    navigate('/sign-in');
  };

  return (
    <header className="navbar sticky top-0 z-50 border-b border-yellow-200 bg-white/80 backdrop-blur dark:border-yellow-800 dark:bg-yellow-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-3">
        <div className="flex items-center gap-2 sm:gap-3 md:mr-6">
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src={props.img}
              alt="Brand logo"
              width="48"
              height="48"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover ring-1 ring-yellow-200 dark:ring-yellow-800"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight text-yellow-900 dark:text-yellow-50">
              {props.title}
            </span>
          </NavLink>
        </div>

        <ul className="hidden items-center gap-2 lg:gap-4 text-sm font-medium text-yellow-700 md:flex dark:text-yellow-200">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/explore" 
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head1}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ar-vr" 
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head2}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/marketplace" 
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head3}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/festivals" 
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head4}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'nav-active' : 'hover:text-yellow-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head5}
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="inline-flex items-center rounded-lg bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
            type="button"
            onClick={() => navigate('/explore')}
          >
            Plan A Trip!
          </button>
          
          {props.userName && (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 rounded-lg bg-yellow-100 px-3 py-2 text-sm font-medium text-yellow-900 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-50 dark:hover:bg-yellow-700"
              >
                <span>{props.userName}</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-yellow-900">
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800 rounded-lg"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-yellow-700 hover:bg-yellow-100 dark:text-yellow-200 dark:hover:bg-yellow-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-yellow-200 bg-white dark:border-yellow-800 dark:bg-yellow-950">
          <ul className="space-y-1 px-4 py-3">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                {props.head1}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ar-vr"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                {props.head2}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketplace"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                {props.head3}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/festivals"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                {props.head4}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'nav-active' : 'text-yellow-700 hover:bg-yellow-50 dark:text-yellow-200 dark:hover:bg-yellow-800',
                  ].join(' ')
                }
              >
                {props.head5}
              </NavLink>
            </li>
            <li className="pt-2">
              <button
                className="w-full rounded-lg bg-red-600 px-3 py-2 text-base font-semibold text-white hover:bg-red-500"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/explore');
                }}
              >
                Plan A Trip!
              </button>
            </li>
            {props.userName && (
              <li className="pt-2 border-t border-yellow-200 dark:border-yellow-800">
                <div className="px-3 py-2 text-sm text-yellow-700 dark:text-yellow-200">
                  Welcome, {props.userName}
                </div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full rounded-lg bg-yellow-100 px-3 py-2 text-base font-medium text-yellow-100 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-50 dark:hover:bg-yellow-700"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  head1: PropTypes.string,
  head2: PropTypes.string,  
  head3: PropTypes.string,
  head4: PropTypes.string,
  head5: PropTypes.string,
  userName: PropTypes.string,
  onLogout: PropTypes.func
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  head1: 'Set Head1 Here',
  head2: 'Set Head2 Here',
  head3: 'Set Head3 Here',
  head4: 'Set Head4 Here',
  head5: 'Set Head5 Here'
};
