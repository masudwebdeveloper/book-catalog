interface ReviewsProps {
  reviews: {
    avater: string;
    review: string;
    name: string;
    date: string;
  };
}
const ReviewCard = ({ reviews }: ReviewsProps) => {
  const { avater, name, date, review } = reviews;
  return (
    <div className="py-3">
      <div className="flex space-x-5">
        <div className="w-12 h-12">
          <img className="rounded-full" src={avater} alt={name} />
        </div>
        <div>
        <p className=""> <span className="text-gray-500">By</span> {name}</p>
        <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <p className="p-2">{review}</p>
      <hr />
    </div>
  );
};

export default ReviewCard;
