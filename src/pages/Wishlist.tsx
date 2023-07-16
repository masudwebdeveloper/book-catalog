/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Error from "../components/common/Error";
import PreLoader from "../components/common/PreLoader";
import WishlistCard from "../components/wishlist/WishlistCard";
import { useGetWishlistsQuery } from "../redux/api/apiSlice";
import { useAppSelector } from "../redux/hook";

const Wishlist = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading, isError } = useGetWishlistsQuery(
    user?.email
  );

  let content = null;

  if (isLoading) {
    content = <PreLoader />;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an Error Occurred!" />;
  }
  if (!isLoading && !isError && data?.data.length === 0) {
    content = <Error message="wishlist book. Not found!" />;
  }
  if (!isLoading && !isError && data?.data.length > 0) {
    content = data?.data.map((wishlist: any) => (
      <WishlistCard wishlist={wishlist} key={wishlist._id} />
    ));
  }
  return (
    <div className="sm:px-96">
      <div className="bg-gray-50 shadow-2xl my-5">{content}</div>
    </div>
  );
};
export default Wishlist;
