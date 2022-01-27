import styles from './ChatName.module.css';
import tick from '../../images/tick.png';

const ChatName = ({ user }) => {
  return (
    <div className={styles.chatUserHeader}>
      <img src={user.image} alt="user avatar" className={styles.userAvatar} />
      <img src={tick} alt="" className={styles.tickImg} />
      <h3 className={styles.userName}>{user.name}</h3>
    </div>
  );
};

export default ChatName;
