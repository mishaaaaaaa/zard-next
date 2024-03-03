import styles from "./styles.module.scss";

const Checkbox = ({ customClass, selected, onCheckboxChange }) => {
  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onCheckboxChange(e.target.checked);
  };

  return (
    <div className={customClass} onClick={(e) => e.stopPropagation()}>
      <label className={styles.container}>
        <input type="checkbox" checked={selected} onChange={handleCheckboxClick} />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

export default Checkbox;
