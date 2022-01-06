import { useEffect, useState } from "react";
import Footer from "./Footer";
import Movies from "./Movies";
import Hero from "./Hero";

export default function Home() {
  const [trendingNow, setTrendingNow] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [crime, setCrime] = useState([]);
  const [drama, setDrama] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_api_key}`)
    .then((res) => res.json())
    .then((data) => setTrendingNow(data.results));

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_api_key}&language=en-US&page=1`)
    .then(res => res.json())
    .then(res => setPopularMovie(res.results))

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_api_key}&language=en-US&page=1`)
    .then(res => res.json())
    .then(res => setPopularTv(res.results))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}&with_genres=80`)
    .then(res => res.json())
    .then(res => setCrime(res.results))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}&with_genres=18`)
    .then(res => res.json())
    .then(res => setDrama(res.results))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}&with_genres=27`)
    .then(res => res.json())
    .then(res => setHorror(res.results))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_api_key}&with_genres=10749`)
    .then(res => res.json())
    .then(res => setRomance(res.results))
  }, []);
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <Hero movie={trendingNow[Math.floor(Math.random() * trendingNow.length)]} />
      <Movies title="Trending Now" movies={trendingNow} isLarge={true} />
      <Movies title="Popular Movies" movies={popularMovie} isLarge={false} />
      <Movies title="Popular Tv Shows" movies={popularTv} isLarge={false} />
      <Movies title="Crime" movies={crime} isLarge={false} />
      <Movies title="Drama" movies={drama} isLarge={false} />
      <Movies title="Horror" movies={horror} isLarge={false} />
      <Movies title="Romance" movies={romance} isLarge={false} />
      <Footer />
    </div>
  );
}
