import { Link, Navigate } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../const';
import { loginAction } from '../../store/api-actions';
import { FormEvent } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { successToastConfig } from '../../const';
import { useSelector } from 'react-redux';
import { getAuthorizationStatus } from '../../store/authorization/selectors';
import { useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../types/action';
import { changeCity } from '../../store/action';
import { cities } from '../../const';

const ON_INVALID_MESSAGE = 'The password must contain at least one letter and a number!';
const AUTH_SUCCESS_TEXT = 'Authorization successful!';
const TEST_ID = 'sign-in';

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Login(): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const randomCityID = getRandomNumber(0, cities.length - 1);

  const authStatus = useSelector(getAuthorizationStatus);
  const currentCity = cities.find((city) => city.id === randomCityID) || cities[0];
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function passwordInputChangeHandler(evt: FormEvent<HTMLInputElement> ) {
    const input = evt.currentTarget;
    input.setCustomValidity('');

    if (!input.validity.valid) {
      input.setCustomValidity(ON_INVALID_MESSAGE);
    }
  }

  function formSubmitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (loginRef.current && passwordRef.current) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      toast(AUTH_SUCCESS_TEXT, successToastConfig);
    }
  }

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={Path.Main} />
    );
  }

  return (
    <main className="page__main page__main--login" data-testid={'login'}>
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
              <input ref={passwordRef} className="login__input form__input" name="password" placeholder="Password" required
                pattern='^(?=.*[A-Za-z])(?=.*\d).+$' onChange={passwordInputChangeHandler}
              />
            </div>
            <button className="login__submit form__submit button" type="submit" data-testid={TEST_ID}>Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={Path.Main} onClick={() => dispatch(changeCity(randomCityID))}>
              <span>{currentCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
