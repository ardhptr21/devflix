const Home = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://wallpapersmug.com/download/1600x900/7ac8a5/spider-man-movie-2019-far-from-home.jpg"
          alt="thor"
          className="w-full h-screen brightness-50"
        />
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-10">
          <div className="text-center">
            <small className="font-medium text-yellow-300 uppercase">Special For you</small>
            <h1 className="mb-3 text-3xl font-bold text-white uppercase md:text-5xl">SPIDERMAN: NO WAY HOME</h1>
            <p className="px-8 m-auto text-sm text-white md:text-base md:w-1/2">
              An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity
              is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two
              rebels on the run who just might be able to restore order.
            </p>
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
      </div>
    </>
  );
};

export default Home;
