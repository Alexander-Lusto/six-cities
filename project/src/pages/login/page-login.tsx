import Header from '../../components/header/header';
import Login from '../../components/login/login';

function PageLogin(): JSX.Element {
  return (
    <div className='page page--gray page--login'>
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default PageLogin;
