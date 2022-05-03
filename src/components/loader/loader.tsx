import styles from './loader.module.scss';

function Loader(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loader;
