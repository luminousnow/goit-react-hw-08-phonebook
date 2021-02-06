import { useSelector } from 'react-redux';
import { Navigation, NavAuth, UserMenu } from '../../components';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavAuth />}
    </div>
  );
}

export { AppBar };
