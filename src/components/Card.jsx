const Card = ({ title, poster, release, rating }) => {
  return (
    <a href="/" className="mb-10 m-2 shadow-lg relative group">
      <div className="absolute top-0 left-1/2 transform px-4 py-2 rounded-3xl z-20 -translate-y-1/2 -translate-x-1/2 bg-yellow-300 font-bold text-sm">
        {rating}
      </div>
      <div className="overflow-hidden rounded-lg">
        <img className="w-full transform transition duration-300 group-hover:scale-110" src={poster} alt={title} />
      </div>

      <div className="mt-5">
        <small className="text-yellow-300">Release {release}</small>
        <h3 className="text-white text-md">{title}</h3>
      </div>
    </a>
  );
};

export default Card;
