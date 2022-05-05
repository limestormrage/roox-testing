import { useDispatch } from 'react-redux';
import { changeSortType } from '../../store/action';
import { sortType } from './const';
import styles from './sort.module.scss';

function Sort(): JSX.Element {
  const dispatch = useDispatch();

  const handleChangeSort = (type: string) => {
    dispatch(changeSortType(type));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <div className={styles.sortType}>
        {Object.entries(sortType).map(([name, label]) => (
          <button
            key={name}
            className={styles.button}
            type="button"
            aria-label={label}
            onClick={() => handleChangeSort(name)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sort;
