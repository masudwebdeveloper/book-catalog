import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditBookMutation, useGetBookQuery } from "../../redux/api/apiSlice";
interface IBookData {
  title: string;
  author: string;
  genre: string;
  publication: string;
  thumnail: string;
}
const EditBook = () => {
  const { id } = useParams();
  const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();
  const { data } = useGetBookQuery(id);
  const {
    title: initialTitle,
    author: initialAuthor,
    genre: initialGenre,
    publication: initialPublication,
    thumnail: initialThumnail,
  } = data.data;
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [genre, setGenre] = useState(initialGenre);
  const [publication, setPublication] = useState(initialPublication);
  const [thumnail, setThumnail] = useState(initialThumnail);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const bookData: IBookData = {
    title,
    author,
    genre,
    publication,
    thumnail,
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
      setError("Updating book has an Error occurred!");
    } else {
      // Clear error and proceed with signup
      setError("");
      // Perform addbook logic here
      editBook({ id, data: bookData });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <section className="p-6 md:px-32 dark:text-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Book</h2>
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
              <input
                id="genre"
                type="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
                placeholder="Genre"
                className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="publication" className="text-sm">
                Publication
              </label>
              <input
                id="publication"
                type="text"
                onChange={(e) => setPublication(e.target.value)}
                value={publication}
                placeholder="Publication"
                className="p-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              />
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
          Update Book
        </button>
      </form>
    </section>
  );
};

export default EditBook;