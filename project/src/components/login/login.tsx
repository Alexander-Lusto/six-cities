import { Link, Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { loginAction } from '../../store/api-actions';
import { FormEvent } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { successToastConfig } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/authorization-process/selectors';
import { getCurrentCity } from '../../store/main-data/selectors';
import { useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../types/action';

const AUTH_SUCCESS_TEXT = 'Authorization successful!';

function Login(): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const authStatus = useSelector(getAuthorizationStatus);
  const currentCity = useSelector(getCurrentCity);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function formSubmitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  }

  if (authStatus === AuthorizationStatus.Auth) {
    toast(AUTH_SUCCESS_TEXT, successToastConfig);
    return (
      <Navigate to={Path.Main} />
    );
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={formSubmitHandler}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={Path.Main}>
              <span>{currentCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
