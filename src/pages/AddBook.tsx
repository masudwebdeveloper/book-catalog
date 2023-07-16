import { useState, useEffect } from "react";
import { useAddBookMutation } from "../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hook";
interface IBookData {
  title: string;
  author: string;
  genre: string;
  publication: string;
  thumnail: string;
  email: string;
}
const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publication, setPublication] = useState("");
  const [thumnail, setThumnail] = useState("");
  const [error, setError] = useState("");
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const bookData: IBookData = {
    title,
    author,
    genre,
    publication,
    thumnail,
    email: user?.email as string,
  };
  const handleAddbook = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform signup logic and error handling
    if (
      title === "" ||
      author === "" ||
      genre === "" ||
      publication === "" ||
      thumnail === ""
    ) {
      setError("Please fill in all fields.");
    } else if (!isLoading && isError) {
      setError("Adding book has an Error occurred!");
    } else {
      // Clear error and proceed with signup
      setError("");
      // Perform addbook logic here
      addBook(bookData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      toast.success("book added successfull ");
    }
  }, [isSuccess, navigate]);

  return (
    <section className="p-6 md:px-32 dark:text-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add Book</h2>
      {error && (
        <div className="bg-red-100 text-red-600 px-4 py-2 mb-4 rounded-md">
          {error}
        </div>
      )}
      <form
        method="POST"
        onSubmit={handleAddbook}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input
                id="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Title"
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 p-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author" className="text-sm">
                Author
              </label>
              <input
                id="author"
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                placeholder="Author"
                className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="genre" className="text-sm">
                Genre
              </label>
              <select
                onChange={(e) => setGenre(e.target.value)}
                className="select select-warning w-full text-black p-2 focus:outline-none border-2"
                name="genre"
                defaultValue={genre}
              >
                <option selected>Genre</option>
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
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="publication" className="text-sm">
                Publication
              </label>
              <select
                onChange={(e) => setPublication(e.target.value)}
                className="select select-warning w-full text-black p-2 focus:outline-none border-2"
                name="publication"
                defaultValue={publication}
              >
                <option selected>Publication</option>
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
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="thumnail" className="text-sm">
                Thumnail
              </label>
              <input
                id="thumnail"
                type="text"
                onChange={(e) => setThumnail(e.target.value)}
                value={thumnail}
                placeholder="photo url"
                className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
          </div>
        </fieldset>
        <button
          className="bg-black w-[100px] mx-auto p-2 rounded-md hover:bg-gray-600 border-2 hover:border-gray-900"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
