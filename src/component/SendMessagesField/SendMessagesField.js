import { useState } from 'react';
import styles from './SendMessagesField.module.css';

const SendMessagesField = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'text':
        setText(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };
  return (
    <div className={styles.sendMessages}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.inputSendMessage}
          type="text"
          name="text"
          placeholder="Type your message"
          value={text}
          autoComplete="off"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SendMessagesField;
