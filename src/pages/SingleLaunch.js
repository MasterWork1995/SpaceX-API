import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../components';
import { format } from 'date-fns';
import useFetch from '../hooks/useFetch';
import fetchConstants from '../constants/fetchConstants';

const SingleLaunch = () => {
  const { id } = useParams();
  const [data] = useFetch(`${fetchConstants.LAUNCHES}/${id}`);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="py-32 px-5 max-width grid grid-cols-1 gap-10 md:grid-cols-2">
          <article>
            {data.links.patch.large ? (
              <img src={data.links.patch.large} alt={data.name} />
            ) : (
              <img src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" alt="" />
            )}
          </article>

          <article>
            <h1 className="heading">{data.name}</h1>
            <h2 className="text-white font-bold text-xl opacity-75 mt-2">
              Launch Date: {format(new Date(data.date_local), 'dd MMMM yyyy')},{' '}
              {data.success ? <span className="text-emerald-500">Successful</span> : <span className="text-rose-500">Failed</span>}
            </h2>

            <p className="text-white opacity-75 my-10">{data.details}</p>

            <ul className="text-white text-sm opacity-75 mb-8">
              <li className="mb-3">Fairings: {data.fairings ? `${data.fairings.reused ? 'Reused' : 'Not Reused'}` : 'No Fairings Used'}</li>
              <li>Recovered: {data.fairings ? `${data.fairings.recovered ? 'Fairings Recovered' : 'Fairings Not Recovered'}` : 'No Fairings Used'}</li>
            </ul>

            <ul className="flex flex-wrap items-center justify-start gap-8">
              <li>
                <a href={data.links.article} target="_blank" rel="noreferrer" className="btn">
                  Read Article
                </a>
              </li>
              <li>
                <a href={data.links.webcast} target="_blank" rel="noreferrer" className="btn">
                  Watch Launch on YouTube
                </a>
              </li>
              <li>
                <Link to="/launches" className="text-white opacity-75 text-sm hover:opacity-100">
                  &larr; Back
                </Link>
              </li>
            </ul>
          </article>
        </section>
      )}
    </>
  );
};

export default SingleLaunch;
