import styles from './MessageHistory.module.css';

import { MessageContext } from '../../context/lastMessage';
import { useContext } from "react";

const MessagesHistory = ({ user }) => {
    const { messages } = useContext(MessageContext);

    const userMessages = messages.filter(m => m.chatId === user.id);
    
    
    return (
        <div className={styles.messageBody}>
            <ul>
                {userMessages.map(({id, date, text}) => (
                    <li key={id} className={styles.userMessage}>
                        {(id)%2 === 0 && <img src={user.image} alt="user avatar" className={styles.avatarMessage} />}
                        <div style={{marginLeft: (id) % 2 === 0 ? '0' : 'auto'}}>
                            <div
                                className={styles.inputMessage}
                            >
                                {text}
                            </div>
                            <h6
                                className={styles.dateMessage}
                            >
                                {date}
                            </h6>
                        </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default MessagesHistory;