import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="w-full bg-slate-100 shadow-md">
      <div className="w-10/12 h-[74px] mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-purple-700">MyTube</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border-2 border-gray-300 px-4 py-1 rounded-full z-40 outline-none focus:border-2 focus:border-purple-700 text-gray-700"
            placeholder="Search"
          />
          <GoSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 cursor-pointer z-50 bg-white duration-200 transition-all hover:text-purple-700 hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Header;
