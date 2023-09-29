import PageNumber from "./PageNumber";

const Pagination = () => {
  return (
    <div className="w-full p-6 flex items-center justify-center gap-1">
      <PageNumber active={true} />
      <PageNumber />
      <PageNumber />
      <PageNumber />
      <PageNumber />
      <PageNumber />
    </div>
  );
};

export default Pagination;
