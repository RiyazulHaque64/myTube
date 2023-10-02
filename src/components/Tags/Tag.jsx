import { useDispatch, useSelector } from "react-redux";
import {
  tagRemoved,
  tagSelected,
} from "../../redux/features/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);

  const handleSelect = (title) => {
    if (tags.includes(title)) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <button
      className={`px-4 py-1 rounded-full font-semibold ${
        tags.includes(title)
          ? "bg-purple-700 text-white"
          : "bg-purple-200 text-purple-700"
      }`}
      onClick={() => handleSelect(title)}
    >
      {title}
    </button>
  );
};

export default Tag;
