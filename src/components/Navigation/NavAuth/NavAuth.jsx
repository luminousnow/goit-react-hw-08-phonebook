import { NavLink } from 'react-router-dom';

const NavAuth = params => {
  return (
    <div>
      <NavLink to="/registration" exact className="menuItem">
        Registration
      </NavLink>
      <NavLink to="/login" exact className="menuItem">
        Login
      </NavLink>
    </div>
  );
};

export { NavAuth };
