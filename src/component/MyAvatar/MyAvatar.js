import styles from './MyAvatar.module.css';
import myavatar from '../../images/images.jpg'

const MyAvatar = () => {
    return (
        <img
            src={myavatar}
            alt="avatar"
            className={styles.myAvatar} />
    )
}

export default MyAvatar;