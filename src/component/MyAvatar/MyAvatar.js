import styles from './MyAvatar.module.css';
import myavatar from '../../images/images.jpg';
import tick from '../../images/tick.png';

const MyAvatar = () => {
  return (
    <>
      <img src={myavatar} alt="avatar" className={styles.myAvatar} />
      <img src={tick} alt="" className={styles.tickImg} />
    </>
  );
};

export default MyAvatar;
