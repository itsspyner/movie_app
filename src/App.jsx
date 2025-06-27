import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import FavMovieCard from "./components/FavMovieCard";

function App() {
  const [movie, setMovie] = useState(null);
  const [input, setInput] = useState("One piece");
  const [favourite, setFavourite] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchMovies() {
      const req = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`
      );
      const res = await req.json();
      setMovie(res.Search);
    }
    fetchMovies();
  }, [input]);
  return (
    <>
      <div className="flex justify-between mb-[5px] mx-[5px]">
        <p className="font-semibold text-[30px]">Movies</p>
        <input
          className="border-2 w-[40%] h-[5dvh] bg-white rounded-[8px] mt-[5px] outline-none text-[20px] text-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="w-auto mt-[15px]">
        {movie?.map((elem) => (
          <div
            className="inline-block"
            onClick={() =>
              setFavourite((prev) =>
                prev.includes(elem.Poster) ? prev : [...prev, elem.Poster]
              )
            }
          >
            <MovieCard image={elem.Poster} desc={elem.Title} />
          </div>
        ))}
      </div>
      <div className="mt-[5px]">
        <p className="font-semibold text-[25px]">Favourites</p>
        <div className="w-[100%] mt-[15px]">
          <div>
            {favourite.map((movie) => (
              <div
                className="inline-block"
                onClick={() =>
                  setFavourite((prev) => prev.filter((fav) => fav !== movie))
                }
              >
                <FavMovieCard image={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
