import styles from './sort.module.scss';

function Sort(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <div className={styles.sortType}>
        <button className={styles.button} type="button" aria-label="по городу">
          по городу
        </button>
        <button className={styles.button} type="button" aria-label="по цене">
          по компании
        </button>
      </div>
    </div>
  );
}

export default Sort;
