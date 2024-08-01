import { useEffect, useState } from "react";
import genreids from "../constants/genre";
function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    if (moviesFromLocalStorage) {
      setWatchList(moviesFromLocalStorage);
    }
  }, []);
  const genre = (genre_id) => {
    return genreids[genre_id];
  };

  const ascRatings = () => {
    const ascsortWwatchList = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchList([...ascsortWwatchList]);
  };

  const descRatings = () => {
    const descsortWwatchList = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchList([...descsortWwatchList]);
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value);
  }
  return (
    <>
      <div className="flex justify-center ">
        <input
          className="h-[3rem] my-2 bg-gray-300 rounded-xl text-center font-semibold hover:border-orange-500"
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
        ></input>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-black">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-lg text-black">Name</th>
              <th>
                <div className="flex">
                  <i
                    onClick={ascRatings}
                    className="fa-solid fa-arrow-up mx-2 my-1 hover:cursor-pointer"
                  ></i>
                  <div>Ratings</div>
                  <i
                    onClick={descRatings}
                    className="fa-solid fa-arrow-down mx-2 my-1 hover:cursor-pointer"
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-black">
            {watchList
              .filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => (
                <tr className="hover:bg-yellow-500" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-black flex gap-4 ">
                    <img
                      className="h-[6rem] w-[10rem] object-fit rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-black text-lg">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4 font-bold">{movie.vote_average}</td>
                  <td className="pl-6 py-4 font-bold">
                    {Math.floor(movie.popularity)}
                  </td>
                  <td className="pl-2 py-4">{genre(movie.genre_ids[0])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
