const Tag = ({ active }) => {
  return (
    <button
      className={`px-4 py-1 rounded-full font-semibold ${
        active ? "bg-purple-700 text-white" : "bg-purple-200 text-purple-700"
      }`}
    >
      Redux
    </button>
  );
};

export default Tag;
