function Movies({ title, movies, isLarge }: any) {
  return (
    <div className="ml-4 pt-4">
      <h2 className="text-xl font-bold ml-1">{title}</h2>
      <div className="flex overflow-hidden">
        {movies.map((movie: any) => (
          <img
            onClick={() => window.location.href = `/${movie.id}`}
            className="m-2 w-60 hover:scale-[1.08] ease-linear duration-200"
            key={movie.id}
            src={isLarge ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;