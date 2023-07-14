/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Books from "../components/book/Books";
import BookCard from "../components/common/BookCard";
import Error from "../components/common/Error";
import PreLoader from "../components/common/PreLoader";
import { useGetBooksQuery } from "../redux/api/apiSlice";

const Home = () => {
  return (
    <div className="grid grid-cols-4 justify-between gap-4 md:px-32 mt-5">
      <Books />
    </div>
  );
};

export default Home;
