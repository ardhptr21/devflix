import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute z-10 flex items-center justify-between w-screen px-10 py-3 text-white">
      <div className="text-2xl font-black md:text-3xl">Devflix</div>
      <div className="flex items-center justify-center gap-5">
        <div className="relative mx-auto">
          <input
            className="hidden h-10 pl-2 pr-8 text-sm bg-transparent border-2 rounded-lg cursor-pointer focus:outline-none md:block placeholder:text-white"
            type="search"
            name="search"
            placeholder="Search movies"
            autoComplete="off"
            readOnly
          />
          <button type="submit" className="top-0 right-0 md:absolute md:mt-3 md:mr-5">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="relative">
          <button className="select-none md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul
            className={`absolute md:static md:scale-100 md:bg-transparent md:text-white bg-white text-black md:border-none md:flex-row md:w-full right-0 flex flex-col w-48 gap-2 p-2 border-2 rounded-md transition duration-200 origin-top-right ${
              !isOpen ? 'scale-0' : 'scale-100'
            }`}
          >
            <li className="px-2 py-1 rounded">
              <a href="/">New</a>
            </li>
            <li className="px-2 py-1 rounded">
              <a href="/">Popular</a>
            </li>
            <li className="px-2 py-1 rounded">
              <a href="/">Kids Zone</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
