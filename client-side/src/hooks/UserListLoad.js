import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserList } from 'service/profile';

const UserlistHook = () => {
  const { token, friendList, profile } = useSelector(state => state);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    (async () => setAllUser(await getUserList(token.data)))();
  }, [friendList.status, profile.status]);

  return allUser;
};

export default UserlistHook;
