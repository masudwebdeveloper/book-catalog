import { Link } from "react-router-dom";
import { IBook } from "../../types/globalTypes";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface BookProps {
  book: IBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const { title, author, genre, publication, thumnail, _id } = book;

  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={thumnail}
        alt=""
        className="object-catain h-72 object-center w-full rounded-t-md dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between py-4 px-6 space-y-1">
        <div className="">
          <h2 className="text-xl font-semibold tracki">Title: {title}</h2>
          <p className="dark:text-gray-100">Author: {author}</p>
          <p className="dark:text-gray-100">Genre: {genre}</p>
          <p className="dark:text-gray-100">Publication: {publication}</p>
        </div>
        <Link
          to={`/bookdetails/${_id}`}
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Book;
