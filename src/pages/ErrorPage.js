import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const ErrorPage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1 className="mb-5 text-white">Error | Page could not be found</h1>
        <Link to={routes.HOME} className="btn">
          &larr; Back to Homepage
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
