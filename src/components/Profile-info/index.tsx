import styles from './profile-info.module.scss';

function ProfileInfo(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Профиль пользователя</h1>
        <button className={styles.button} type="button">Редактировать</button>
      </div>
      <form action="#">
        <div className={styles.formWrapper}>
          <div className={styles.formItem}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" value="Иван Иванов" disabled />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-name">User name</label>
            <input className={styles.input} type="text" id="user-name" value="Иван Иванов" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="email">E-mail</label>
            <input className={styles.input} type="email" id="email" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-street">Street</label>
            <input className={styles.input} type="text" id="user-street" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-city">City</label>
            <input className={styles.input} type="text" id="user-city" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="zip-code">Zip code</label>
            <input className={styles.input} type="text" id="zip-code" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-phone">Phone</label>
            <input className={styles.input} type="phone" id="user-phone" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-website">Website</label>
            <input className={styles.input} type="text" id="user-website" />
          </div>
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-comment">Comment</label>
            <textarea id="user-comment" rows={4} />
          </div>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default ProfileInfo;
