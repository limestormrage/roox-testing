import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from '../../store/users/selectors';
import styles from './profile-info.module.scss';

function ProfileInfo(): JSX.Element {
  const { id } = useParams();
  const users = useSelector(getUsers);
  const currentUser = users.find((user) => user.id === Number(id));
  const [readOnly, setReadOnly] = useState<boolean>(true);

  const handleClickEdit = () => {
    setReadOnly(!readOnly);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <button
          className={styles.button}
          type="button"
          onClick={handleClickEdit}
        >
          Редактировать

        </button>
      </div>
      <form action="#">
        <div className={styles.formWrapper}>
          <div className={styles.formItem}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" value={currentUser?.name} readOnly={readOnly} required />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-name">User name</label>
            <input className={styles.input} type="text" id="user-name" value={currentUser?.username} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="email">E-mail</label>
            <input className={styles.input} type="email" id="email" value={currentUser?.email} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-street">Street</label>
            <input className={styles.input} type="text" id="user-street" value={currentUser?.address.street} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-city">City</label>
            <input className={styles.input} type="text" id="user-city" value={currentUser?.address.city} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="zip-code">Zip code</label>
            <input className={styles.input} type="text" id="zip-code" value={currentUser?.address.zipcode} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-phone">Phone</label>
            <input className={styles.input} type="phone" id="user-phone" value={currentUser?.phone} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-website">Website</label>
            <input className={styles.input} type="text" id="user-website" value={currentUser?.website} readOnly={readOnly} />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-comment">Comment</label>
            <textarea id="user-comment" rows={4} readOnly={readOnly} />
          </div>
        </div>
        <button
          type="submit"
          disabled={readOnly}
        >
          Отправить

        </button>
      </form>
    </div>
  );
}

export default ProfileInfo;
