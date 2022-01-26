import styles from './ChatName.module.css';

const ChatName = ({ user }) => {
    return (
        <div className={styles.chatUserHeader}>
            <img
                src={user.image}
                alt="user avatar"
                className={ styles.userAvatar}/>
            <h3 className={styles.userName}>{user.name}</h3>
        </div>
    );
};

export default ChatName;