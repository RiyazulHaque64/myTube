const PageNumber = ({ active }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full font-semibold flex items-center justify-center text-xs cursor-pointer duration-300 hover:scale-105 ${
        active ? "bg-purple-700 text-white" : "bg-purple-200 text-purple-700"
      }`}
    >
      2
    </div>
  );
};

export default PageNumber;
