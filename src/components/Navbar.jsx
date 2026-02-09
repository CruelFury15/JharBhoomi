import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={props.img}
              alt="Brand logo"
              width="48"
              height="48"
              className="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-800"
            />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {props.title}
            </span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex dark:text-slate-200">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  'rounded-md px-2 py-1 transition-colors',
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
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
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
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
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
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
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
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
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
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
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'hover:text-slate-900 dark:hover:text-white',
                ].join(' ')
              }
            >
              {props.head5}
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <button
          className="hidden md:inline-flex items-center rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="button"
          onClick={() => navigate('/explore')}
        >
          Plan A Trip!
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <ul className="space-y-1 px-4 py-3">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
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
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
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
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
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
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
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
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
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
                    isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400' : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800',
                  ].join(' ')
                }
              >
                {props.head5}
              </NavLink>
            </li>
            <li className="pt-2">
              <button
                className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-base font-semibold text-white hover:bg-indigo-500"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/explore');
                }}
              >
                Plan A Trip!
              </button>
            </li>
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
  head5: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  head1: 'Set Head1 Here',
  head2: 'Set Head2 Here',
  head3: 'Set Head3 Here',
  head4: 'Set Head4 Here',
  head5: 'Set Head5 Here'
};
