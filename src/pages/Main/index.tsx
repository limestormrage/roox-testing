import styles from './main.module.scss';
import Sort from '../../components/Sort';
import UserList from '../../components/User-list';

function Main(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Sort />
      <UserList />
    </div>
  );
}

export default Main;
