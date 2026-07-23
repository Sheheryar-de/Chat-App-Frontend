import { IoSearch } from "react-icons/io5";

function SearchInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border border-gray-700 rounded-md overflow-hidden"
      >
        <button
          type="submit"
          className="bg-gray-500 flex items-center justify-center size-10"
        >
          <IoSearch />
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search users"
          className="bg-transparent pl-2 text-gray-200 outline-none w-full"
        />
      </form>
    </>
  );
}

export default SearchInput;
