import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../../redux/features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [searchInput, setSearchInput] = useState(search);
  const match = useMatch("/");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchText(searchInput));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <>
      <form className="relative" onSubmit={searchHandler}>
        <input
          type="text"
          className="border-2 border-gray-300 px-4 py-1 rounded-full z-40 outline-none focus:border-2 focus:border-purple-700 text-gray-700"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <GoSearch
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-50 bg-white duration-200 transition-all hover:text-purple-700 hover:scale-125"
          onClick={searchHandler}
        />
      </form>
    </>
  );
};

export default SearchBox;
