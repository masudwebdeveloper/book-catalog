import Books from "../components/book/Books";

const Home = () => {
  return (
    <div className="grid grid-cols-4 justify-between gap-4 md:px-32 mt-5">
      <Books />
    </div>
  );
};

export default Home;
