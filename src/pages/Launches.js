import useFetch from '../hooks/useFetch';
import { Loading } from '../components';
import { Link } from 'react-router-dom';
import fetchConstants from '../constants/fetchConstants';
import routes from '../constants/routes';

export default function Launches() {
  const [data] = useFetch(fetchConstants.LAUNCHES);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 max-width">
          <h1 className="heading text-center mb-10">Launches</h1>
          <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
            {data.map(({ id, name, links, details, flight_number }) => (
              <Link to={`${routes.LAUNCHES}/${id}`} key={id} className="p-5 bg-zinc-900">
                {links.patch.large ? <img src={links.patch.large} alt={name} /> : <img src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" alt="" />}
                <h2 className="font-bold text-white mt-5 mb-3 text-xl">{name}</h2>
                <p className="font-bold text-white mt-5 mb-3 text-l">
                  Launch number: <span className="font-bold text-white mt-5 mb-3 text-xl">{flight_number}</span>
                </p>
                {details && <p className="text-white opacity-75">{`${details.substring(0, 50)}...`}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
