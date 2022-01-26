import moment from 'moment';
import styles from '../UserList/UserList.module.css';

const User = ({ id, image, name, messages }) => {
  const lm = messages.filter(m => m.chatId === id).reverse()[0];
  
  return (
    <>
      <li className={styles.usersList}>
        <img src={image} alt="users avatar" className={styles.usersAvatar} />
        <div className={styles.lm}>
          <h3 className={styles.usersName}>{name}</h3>
          <h4 className={styles.text}>{lm.text}</h4>
        </div>
        <h5 className={styles.data}>{ moment(lm.date).format('DD MMM YYYY')}</h5>     
      </li>
    </>
  );
};

export default User;