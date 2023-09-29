import Tag from "./Tag";

const Tags = () => {
  return (
    <div className="w-full border flex gap-2 py-8">
      <Tag />
      <Tag active={true} />
    </div>
  );
};

export default Tags;
