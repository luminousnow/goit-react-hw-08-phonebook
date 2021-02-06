import { NavLink } from 'react-router-dom';

const Navigation = params => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export { Navigation };
