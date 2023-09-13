import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiSpacex } from 'react-icons/si';
import routes from '../constants/routes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to={routes.HOME}>
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>

        <nav className={isOpen ? 'open' : ''}>
          <ul>
            <li>
              <Link to={routes.CAPSULES} className="text-white text-sm hover:text-sky-700 transition">
                Capsules
              </Link>
            </li>
            <li>
              <Link to={routes.CORES} className="text-white text-sm hover:text-sky-700 transition">
                Cores
              </Link>
            </li>
            <li>
              <Link to={routes.LAUNCHES} className="text-white text-sm hover:text-sky-700 transition">
                Launches
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-sm uppercase tracking-wider">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
