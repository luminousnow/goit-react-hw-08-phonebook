import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../img/default-avatar.png';
import { logOut } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className="userMenu">
      <img src={avatar} alt="" width="32" />
      <span>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export { UserMenu };
