import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="w-full bg-slate-100 shadow-md">
      <div className="w-10/12 h-[74px] mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-semibold text-purple-700">MyTube</h2>
          </Link>
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
