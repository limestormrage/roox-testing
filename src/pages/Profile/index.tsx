import ProfileInfo from '../../components/Profile-info';
import Sort from '../../components/Sort';
import styles from './profile.module.scss';

function Profile(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Sort />
      <ProfileInfo />
    </div>
  );
}

export default Profile;
