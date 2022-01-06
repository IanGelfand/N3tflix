import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function SingleMovie() {
  const { id } = useParams()
  const [movie, setMovie] = useState<any>({})
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_api_key}&language=en-US`)
    .then((res) => res.json())
    .then((res) => setMovie(res))
  }, [id])
  return (
    <div className="bg-[#141414] text-white min-h-screen min-w-screen px-5 flex items-center justify-center flex-col">
      <div className="p-1 w-full flex justify-between">
        <div>
          <h1
            className="text-2xl font-bold"
          >
            {movie.title}
          </h1>
          <p>{movie?.release_date?.split("-")[0]}</p>
        </div>
        <div>
          <h2>⭐{movie.vote_average}/10</h2>
          <h2>{movie.vote_count} votes</h2>
        </div>
      </div>
      <div>
        <img 
          className="h-[40vh] mb-5 rounded-lg"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} 
        />
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}
