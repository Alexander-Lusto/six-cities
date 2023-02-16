import Header from '../../components/header/header';
import Login from '../../components/login/login';

type Props = {
  isAuthorized: boolean;
}

function PageLogin(props: Props): JSX.Element {
  return (
    <div className='page page--gray page--login'>
      <Header isAuthorized={props.isAuthorized} isLoginPage></Header>
      <Login></Login>
    </div>
  );
}

export default PageLogin;
