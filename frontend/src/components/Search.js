import { useEffect } from "react";

const Search = ({ word, setWord, handleSubmit }) => {
  // useEffect()
  return (
    <div className="container py-8 text-center ms-16">
      <form onSubmit={handleSubmit}>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="w-1/2 px-4 py-4 border border-none rounded-lg bg-slate-200"
          type="text"
          placeholder="Search for Images"
          // required
        />
        <button
          className="px-4 py-4 mx-4 text-xl text-white bg-blue-600 rounded-md "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

{
  /* <form onSubmit={handleSubmit}>
<input
  type="text"
  className="w-1/2 px-4 py-4 border border-none rounded-lg bg-slate-200"
  placeholder="Search for Images"
/>
<button
  // onSubmit={handleSubmit}
  type="submit"
  className="px-4 py-4 mx-4 text-xl text-white bg-blue-600 rounded-md "
>
  Search
</button>
</form> */
}
