import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";
import CardPreloader from "../common/CardPreloader";
import Error from "../common/Error";
import Book from "./Book";

const Books = () => {
  const { search } = useAppSelector((state) => state.search);
  const { genre, publication } = useAppSelector((state) => state.filter);
  const { data, isLoading, isError } = useGetBooksQuery({
    search: search,
    genre: genre,
    publication: publication,
  });
  let content = null;
  if (isLoading) {
    content = (
      <>
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
        <CardPreloader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occured!" />;
  }

  if (!isError && !isLoading && data.data.length === 0) {
    content = <Error message="book is not found" />;
  }
  if (!isError && !isLoading && data.data.length > 0) {
    content = data.data?.map((book: IBook) => (
      <Book book={book} key={book._id} />
    ));
  }
  return content;
};

export default Books;
