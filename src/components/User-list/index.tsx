import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { APPRoute } from '../../const';
import { getSortedUsers, getUsersLoading } from '../../store/users/selectors';
import Loader from '../loader/loader';
import styles from './user-list.module.scss';

function UserList(): JSX.Element {
  const users = useSelector(getSortedUsers);
  const usersLoading = useSelector(getUsersLoading);

  if (usersLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.userPage}>
      <h1 className={styles.title}>Список пользователей</h1>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li className={styles.listItem} key={user.id}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <p className={styles.infoName}>ФИО:</p>
                <p className={styles.infoText}>{user.name}</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.infoName}>город:</p>
                <p className={styles.infoText}>{user.address.city}</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.infoName}>компания:</p>
                <p className={styles.infoText}>{user.company.name}</p>
              </div>
            </div>
            <Link className={styles.infoLink} to={`${APPRoute.Profile}/${user.id}`}>Подробнее</Link>
          </li>
        ))}
      </ul>
      <p className={styles.text}>
        Найдено
        {' '}
        {users ? users.length : 0}
        {' '}
        пользователей
      </p>
    </div>
  );
}

export default UserList;
