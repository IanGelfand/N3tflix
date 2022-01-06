function Hero({ movie }: any) {
  console.log(movie);
  return (
    <div 
      className="p-8 h-[80vh] bg-cover" 
      style={{
        background: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <h1 className="text-5xl font-bold mb-4 mt-[20rem]">{movie?.title}</h1>
      <p className="font-medium text-lg mb-4 w-[45rem] max-w-[80vw]">{movie?.overview}</p>
      <button 
        className="cursor-pointer font-bold rounded px-8 py-2 mr-2 bg-[rgba(51, 51, 51, 0.5] hover:bg-[#e6e6e6] hover:text-black transition all duration-200">
          Play
      </button>
      <button 
        className="cursor-pointer font-bold rounded px-8 py-2 mr-2 bg-[rgba(51, 51, 51, 0.5] hover:bg-[#e6e6e6] hover:text-black transition all duration-200">
        My List
      </button>
    </div>
  );
}

export default Hero;