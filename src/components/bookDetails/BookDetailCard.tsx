import { Link, useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalTypes";
import { useEffect } from "react";
import Error from "../common/Error";

interface BookProps {
  book: IBook;
}
const BookDetailCard = ({ book }: BookProps) => {
  const { title, author, thumnail, genre, publication, reviews, _id } = book;
  const navigate = useNavigate();
  const [deleteBook, { isLoading, isSuccess, isError }] =
    useDeleteBookMutation();
  const handleDeleteBook = () => {
    const process = confirm("do you want to delete this book");

    if (process && _id) deleteBook(_id);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);
  return (
    <div className="grid grid-cols-3 gap-5 items-center bg-white sm:p-2 rounded">
      <div className="border border-gray-600 p-2 rounded">
        <img
          className="h-96 object-contain w-full mx-auto"
          src={thumnail}
          alt={title}
        />
      </div>
      <div className="space-y-3 sm:ml-5">
        <h2>
          <span className="text-2xl font-semibold">{title}</span> <br />{" "}
          <span className="ml-5">by</span>{" "}
          <span className="text-[#0397D3]">{author}</span>
        </h2>
        <p>
          <span className="font-bold mr-2">Publication:</span> {publication}
        </p>
        <p>{reviews.length} Reviews</p>
        <p>
          <span className="font-bold mr-2">Genre:</span> {genre}
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Link
          to={`/editbook/${_id}`}
          className="hover:scale-105 transition duration-150 bg-[#FFAC30] w-[150px] py-2 mx-auto rounded font-bold text-white text-center text-xl"
        >
          Edit Book
        </Link>
        <button
          onClick={handleDeleteBook}
          className="border-2 hover:border-gray-500 bg-red-500 w-[150px] py-2 mx-auto rounded font-bold text-white text-xl"
        >
          {isLoading ? "waiting..." : "Delete Book"}
        </button>
        <button className="bg-white border-2 hover:bg-green-500 hover:text-white transition-all duration-100 border-green-500 w-[160px] py-2 mx-auto rounded font-bold text-black text-xl">
          Add to Wishlist
        </button>
      </div>
      <div>
        {!isLoading && isError && (
          <Error message="There was an error for Deleting this book" />
        )}
      </div>
    </div>
  );
};

export default BookDetailCard;
