import { useEffect, useState } from 'react';
import getPopularMovies from '../api/getPopularMovies';
import Card from '../components/Card';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [movies, error] = await getPopularMovies();
      setMovies(movies.results);
      setLoading(false);
      if (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) return 'Loading...';

  return (
    <>
      <div className="relative h-screen">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`}
          alt={movies[0].title}
          className="w-full h-screen brightness-50"
        />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-10">
          <div className="text-center">
            <small className="font-medium text-yellow-300 uppercase">Special For you</small>
            <h1 className="mb-3 text-3xl font-bold text-white uppercase md:text-5xl">{movies[0].title}</h1>
            <p className="px-8 m-auto text-sm text-white md:text-base md:w-1/2">{movies[0].overview}</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-2 font-medium uppercase transition duration-200 bg-yellow-300 rounded-3xl hover:bg-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                clipRule="evenodd"
              />
            </svg>{' '}
            See movie
          </button>
        </div>
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-slate-900 h-60 w-full"></div>
      </div>

      <div className="bg-slate-900 pt-10 md:px-0 px-10">
        <ul className="flex flex-row justify-between items-center max-w-xl m-auto border-2 border-yellow-300 px-5 py-2 rounded-xl">
          <li className="text-yellow-300 uppercase font-bold cursor-pointer">Popular</li>
          <li className="text-white uppercase font-medium cursor-pointer">Upcoming</li>
          <li className="text-white uppercase font-medium cursor-pointer">Recent</li>
        </ul>

        <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {movies &&
            movies.slice(1).map((movie) => (
              <Card
                key={movie.id}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                release={new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(Date.parse(movie.release_date))}
                rating={movie.vote_average}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
