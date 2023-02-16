import Header from '../../components/header/header';
import NotFound404 from '../../components/not-found-404/not-found-404';

type Props = {
  isAuthorized: boolean;
}

function PageNotFound(props: Props): JSX.Element {
  return (
    <div className='page page--gray page--login'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <NotFound404></NotFound404>
    </div>
  );
}

export default PageNotFound;
