import { useSelector } from "react-redux";
import Tag from "./Tag";

const Tags = () => {
  const { isLoading, tags, isError, error } = useSelector(
    (state) => state.tags
  );

  return (
    <div className="w-full border flex gap-2 py-8">
      {isLoading ? (
        <h2>Loading ....</h2>
      ) : isError ? (
        <h2>{error}</h2>
      ) : tags?.length > 0 ? (
        tags.map((tag) => <Tag key={tag.id} title={tag.title} />)
      ) : (
        <h2>No Tags available</h2>
      )}
    </div>
  );
};

export default Tags;
