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
              <Link to={routes.LAUNCHES} className="text-white text-sm">
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
