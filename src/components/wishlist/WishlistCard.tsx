import { IBook } from "../../types/globalTypes";
import { FaTrash } from "react-icons/fa";

import { useDeleteWishlistMutation } from "../../redux/api/apiSlice";
type IWishlistTypes = {
  _id: string;
  status: string;
  email: string;
  book: IBook;
};
interface WishlistProps {
  wishlist: IWishlistTypes;
}
const WishlistCard = ({ wishlist }: WishlistProps) => {
  const [deleteWishlist] = useDeleteWishlistMutation();
  const { status, book, _id } = wishlist;
  const { thumnail, author, title } = book;

  const handleDelete = () => {
    deleteWishlist(_id);
  };

  return (
    <div className="grid grid-cols-3 items-center justify-between group border rounded-lg">
      <div className="flex space-y-5 items-center pl-5 col-span-full sm:col-span-2">
        <div className="bg-gray-400 w-32 my-2 object-contain">
          <img
            className="h-40 my-2 object-contain mx-auto"
            src={thumnail}
            alt={title}
          />
        </div>
        <div className="ml-5 mr-20">
          <h1>
            <span className="font-semibold text-gray-600">{title}</span> <br />{" "}
            <span>by</span>
            <span className="text-green-500 ml-5">{author}</span>
          </h1>
          <p className="font-semibold">status: {status}</p>
        </div>
      </div>
      <button onClick={handleDelete} className="">
        <FaTrash className="w-6 h-6 mx-auto hidden group-hover:block hover:text-red-500" />
      </button>
    </div>
  );
};

export default WishlistCard;
