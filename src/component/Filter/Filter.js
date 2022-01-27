import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <input
          className={styles.inputFilter}
          type="text"
          placeholder="Search or start new chat"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Filter;
