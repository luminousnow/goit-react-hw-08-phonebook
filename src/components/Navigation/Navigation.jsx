import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = params => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className="menuItem">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className="menuItem">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export { Navigation };
