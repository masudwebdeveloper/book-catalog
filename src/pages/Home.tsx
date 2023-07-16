import Books from "../components/book/Books";
import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { setGenre, setPublication } from "../redux/features/filter/filterSlice";

const Home = () => {
  const [genreQuery, setGenreQuery] = useState("");
  const [publicationQuery, setPublicationQuery] = useState("");
  const dispatch = useAppDispatch();
  dispatch(setGenre(genreQuery));
  dispatch(setPublication(publicationQuery));

  return (
    <>
      <div className="md:px-32 mt-5">
        <div className="bg-white py-2 mb-5 flex justify-between px-10">
          <div className="flex items-center gap-x-5">
            <div className="text-gray-800 font-semibold">Genre: </div>
            <select
              onChange={(e) => setGenreQuery(e.target.value)}
              className="select select-warning w-full max-w-xs p-2 focus:outline-none border-2"
              defaultValue={genreQuery}
            >
              <option value="" selected>
                Genre
              </option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Historical-Fiction">Historical-Fiction</option>
              <option value="Science-Fiction">Science-Fiction</option>
              <option value="Fiction">Fiction</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Biography">Biography</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
            </select>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="text-gray-800 font-semibold">Publication: </div>
            <select
              onChange={(e) => setPublicationQuery(e.target.value)}
              className="select select-warning w-full max-w-xs p-2 focus:outline-none border-2"
              defaultValue={publicationQuery}
            >
              <option value="" selected>
                Publication
              </option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-between gap-4 ">
          <Books />
        </div>
      </div>
    </>
  );
};

export default Home;
