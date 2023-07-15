import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../redux/api/apiSlice";
import PreLoader from "../components/common/PreLoader";
import Error from "../components/common/Error";
import BookDetailCard from "../components/bookDetails/BookDetailCard";
import { FiSend } from "react-icons/fi";
import ReviewCard from "../components/review/ReviewCard";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookQuery(id);

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

  const reviewData = [
    {
      avater:
        "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/240972713_2898430330487371_1139205994692314943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEISvAiMUmDhOLO_ZTYqdmo3hDpPS20edreEOk9LbR52h2YarCHAlTKsUC0EzakkhGr-bXf2tUfxd61RI8OKWgw&_nc_ohc=C-L4O_NvQYAAX8R5JM8&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBkPiX50SaANmbkwqGH20z3TU4z1mSquICwaM14ixvKlA&oe=64B85C73",
      review: "It's Good",
      date: "14 aug, 2023",
      name: "Masud Rana",
    },
    {
      avater:
        "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/240972713_2898430330487371_1139205994692314943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEISvAiMUmDhOLO_ZTYqdmo3hDpPS20edreEOk9LbR52h2YarCHAlTKsUC0EzakkhGr-bXf2tUfxd61RI8OKWgw&_nc_ohc=C-L4O_NvQYAAX8R5JM8&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBkPiX50SaANmbkwqGH20z3TU4z1mSquICwaM14ixvKlA&oe=64B85C73",
      review: "It's Good",
      date: "14 aug, 2023",
      name: "Masud Rana",
    },
    {
      avater:
        "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/240972713_2898430330487371_1139205994692314943_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEISvAiMUmDhOLO_ZTYqdmo3hDpPS20edreEOk9LbR52h2YarCHAlTKsUC0EzakkhGr-bXf2tUfxd61RI8OKWgw&_nc_ohc=C-L4O_NvQYAAX8R5JM8&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBkPiX50SaANmbkwqGH20z3TU4z1mSquICwaM14ixvKlA&oe=64B85C73",
      review: "It's Good",
      date: "14 aug, 2023",
      name: "Masud Rana",
    },
  ];

  //   console.log(reviews);
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const fullDate = currentDate.toLocaleDateString("en-US", options);

  console.log(fullDate); // Output: "15 Jul, 2023"
  return (
    <div className="sm:px-60 mt-10">
      <div>{content}</div>
      <div className="mt-5">
        <h2 className="text-gray-700 font-semibold text-xl mb-3">
          This Book Reviews
        </h2>
        <form method="post">
          <label htmlFor="review" className="flex bg-white border-2">
            <input
              className="w-full bg-transparent p-2"
              type="text"
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
          {data?.data?.reviews.lenght > 0 &&
            data?.data?.reviews.map((review) => <ReviewCard reviews={review}/>)}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
