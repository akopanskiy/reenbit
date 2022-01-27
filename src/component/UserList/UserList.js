import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MessageContext } from '../../context/lastMessage';
import styles from './UserList.module.css';
import User from '../User';

const UserList = ({ users }) => {
  const { messages } = useContext(MessageContext);

  return (
    <>
      <h2 className={styles.headName}>Chats</h2>
      <ul>
        {users.map(({ id, image, name }) => (
          <Link
            to={`chats/${id}`}
            className={styles.link}
            key={id}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <User id={id} image={image} name={name} messages={messages} />
          </Link>
        ))}
      </ul>
    </>
  );
};
export default UserList;
