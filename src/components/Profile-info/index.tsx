import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, getUsersLoading } from '../../store/users/selectors';
import Loader from '../loader/loader';
import { formField } from './const';
import styles from './profile-info.module.scss';

const initialState = {
  name: '',
  userName: '',
  email: '',
  street: '',
  city: '',
  zipCode: '',
  phone: '',
  website: '',
  comment: '',
};

function ProfileInfo(): JSX.Element {
  const { id } = useParams();
  const users = useSelector(getUsers);
  const usersLoading = useSelector(getUsersLoading);
  const currentUser = users.find((user) => user.id === Number(id));
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [formState, setFormState] = useState<{ [key: string]: string }>(initialState);

  useEffect(() => {
    if (currentUser) {
      setFormState({
        name: currentUser.name,
        userName: currentUser.username,
        email: currentUser.email,
        street: currentUser.address.street,
        city: currentUser.address.city,
        zipCode: currentUser.address.zipcode,
        phone: currentUser.phone,
        website: currentUser.website,
        comment: '',
      });
    }
  }, [currentUser]);

  const handleClickEdit = () => {
    setReadOnly(!readOnly);
  };

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const json = JSON.stringify(formState);

    // eslint-disable-next-line no-alert
    alert('Форма успешно отправлена, данные выведены в консоль');

    // eslint-disable-next-line no-console
    console.log(json);

    setReadOnly(!readOnly);
  };

  if (usersLoading) {
    return (<Loader />);
  }

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
      <form action="#" onSubmit={handleFormSubmit}>
        <div className={styles.formWrapper}>
          {Object.values(formField).map(({
            type, name, title, required,
          }) => (
            <div className={styles.formItem} key={title}>
              <label htmlFor={name}>{title}</label>
              <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                value={formState[name]}
                readOnly={readOnly}
                required={required}
                onChange={handleChangeForm}
              />
            </div>
          ))}
          <div className={styles.formItem}>
            <label className="scad" htmlFor="user-comment">Comment</label>
            <textarea id="user-comment" name="comment" rows={4} readOnly={readOnly} value={formState.comment} onChange={handleChangeForm} />
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
