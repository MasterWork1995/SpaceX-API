import React from 'react';

import useFetch from '../hooks/useFetch';
import { Loading } from '../components';
import fetchConstants from '../constants/fetchConstants';

const Homepage = () => {
  const [data] = useFetch(fetchConstants.COMPANY);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <section className="showcase">
          <div className="overlay">
            <article className="text-white">
              <h1 className="heading text-center capitalize">All The SpaceX Data in one place</h1>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20 px-5">
                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">About</h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">{data.name} was founded by</li>
                    <li className="mb-1">{data.founder} in the year</li>
                    <li className="mb-1">{data.founded}.</li>
                    <li className="mb-1">It has {data.employees} employess,</li>
                    <li className="mb-1">{data.vehicles} vehicles,</li>
                    <li className="mb-1">{data.launch_sites} launch sites,</li>
                    <li className="mb-1">and {data.test_sites} test sites and</li>
                    <li className="mb-1">is valued at {data.valuation.toLocaleString()} B</li>
                  </ul>
                </article>

                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Headquarters</h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">{data.headquarters.address}</li>
                    <li className="mb-1">{data.headquarters.city}</li>
                    <li className="mb-1">{data.headquarters.state}</li>
                  </ul>
                </article>

                <article>
                  <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Useful Links</h2>
                  <ul className="text-sm opacity-75">
                    <li className="mb-1">
                      <a href={data.links.website}>Website</a>
                    </li>
                    <li className="mb-1">
                      <a href={data.links.flickr}>Flickr</a>
                    </li>
                    <li className="mb-1">
                      <a href={data.links.twitter}>Twitter</a>
                    </li>
                    <li className="mb-1">
                      <a href={data.links.elon_twitter}>Elon Twitter</a>
                    </li>
                  </ul>
                </article>
              </div>

              <p className="max-w-3xl mx-auto text-center mt-10">{data.summary}</p>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default Homepage;
