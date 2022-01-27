import MyAvatar from '../MyAvatar';
import Filter from '../Filter';
import UserList from '../UserList';

import { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ users }) => {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleUsers = () => {
    const normalizedFilter = filter.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <aside className={styles.sideBar}>
      <div className={styles.sidebarHeader}>
        <MyAvatar />
        <Filter value={filter} onChange={changeFilter} />
      </div>
      <UserList users={getVisibleUsers()} />
    </aside>
  );
};

export default Sidebar;
