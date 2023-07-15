import { useParams } from "react-router-dom";
import { useAddReviewMutation, useGetBookQuery } from "../redux/api/apiSlice";
import PreLoader from "../components/common/PreLoader";
import Error from "../components/common/Error";
import BookDetailCard from "../components/bookDetails/BookDetailCard";
import { FiSend } from "react-icons/fi";
import ReviewCard from "../components/review/ReviewCard";
import { useState } from "react";
import { useAppSelector } from "../redux/hook";
type IReview = {
  _id: string;
  avatar: string;
  review: string;
  name: string;
  date: string;
};
const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookQuery(id);
  const [addReview, { isError: reviewError, isSuccess }] =
    useAddReviewMutation();
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const { user } = useAppSelector((state) => state.user);
  let content = null;
  if (isLoading) {
    content = <PreLoader />;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an Error Occured!" />;
  }

  if (!isLoading && !isError && data.success) {
    content = <BookDetailCard book={data?.data} />;
  }
  //   console.log(reviews);
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const fullDate = currentDate.toLocaleDateString("en-US", options);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (review === "") {
      setError("Please fill in all fields.");
    }

    const reviewData = {
      review,
      date: fullDate,
      name: user?.displayName,
      avatar: user?.photoURL,
    };

    addReview({ id, data: reviewData });
    setReview("");
    if (reviewError) {
      setError("Review Adding has an Error Occurred!");
    }
  };
  return (
    <div className="sm:px-60 mt-10">
      <div>{content}</div>
      <div className="mt-5">
        <h2 className="text-gray-700 font-semibold text-xl mb-3">
          This Book Reviews
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 px-4 py-2 mb-4 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleAddReview} method="post">
          <label htmlFor="review" className="flex bg-white border-2">
            <input
              className="w-full bg-transparent p-2 focus:outline-none"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write a review"
              name="review"
              id="review"
            />
            <button type="submit">
              <FiSend className="w-6 h-6 mr-3" />
            </button>
          </label>
        </form>
        <div className="mt-5 bg-white p-2">
          {data?.data.reviews.length > 0 &&
            data?.data.reviews.map((review: IReview) => (
              <ReviewCard key={review._id} reviews={review} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
