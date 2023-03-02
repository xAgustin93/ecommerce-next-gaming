import styles from "./NoResult.module.scss";

export function NoResult(props) {
  const { text } = props;

  return (
    <div className={styles.noResult}>
      <p>{text}</p>
    </div>
  );
}
