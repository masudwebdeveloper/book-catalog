import { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search logic
    console.log("Search query:", searchQuery);
  };
  return (
    <div className="flex items-center bg-white rounded-md">
      <form className="md:w-auto w-full" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          placeholder="search by title, author, genre"
          onChange={handleSearchChange}
          className="px-4 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-transparent w-full md:w-auto bg-transparent"
        />
      </form>
      <FiSearch className="w-6 h-6 mr-2 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
