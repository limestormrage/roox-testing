import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { changeSortType } from '../../store/action';
import { sortType } from './const';
import styles from './sort.module.scss';
import { getSortType } from '../../store/app/selectors';

function Sort(): JSX.Element {
  const dispatch = useDispatch();
  const currentSortType = useSelector(getSortType);

  const handleChangeSort = (type: string) => {
    dispatch(changeSortType(type));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Сортировка</h2>
      <div className={styles.sortType}>
        {Object.entries(sortType).map(([name, label]) => {
          const buttonClass = cn(styles.button, {
            [styles.buttonActive]: currentSortType === name,
          });

          return (
            <button
              key={name}
              className={buttonClass}
              type="button"
              aria-label={label}
              onClick={() => handleChangeSort(name)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sort;
