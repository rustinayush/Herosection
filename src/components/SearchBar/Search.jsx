import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./search.css";
const SearchBar = () => {
  return (
    <>
      <div className="wrapper">
        <input className="search" placeholder="Search a song for your choice" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
