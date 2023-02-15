import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound404 ():JSX.Element {
  return(
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <h1> 404 Not Found</h1>
        <Link to={AppRoute.Main}>Go to main page</Link>
      </div>
    </main>
  );
}

export default NotFound404;
