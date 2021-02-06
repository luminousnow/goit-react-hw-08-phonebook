import { NavLink } from 'react-router-dom';

const NavAuth = params => {
  return (
    <div>
      <NavLink to="/registration" exact>
        Registration
      </NavLink>
      <NavLink to="/login" exact>
        Login
      </NavLink>
    </div>
  );
};

export { NavAuth };
