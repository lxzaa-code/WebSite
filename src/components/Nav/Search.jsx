import './Search.css';
import {CiSearch} from "react-icons/ci";

function Search(){
    return (
        <div className="Search">
            <input type="text" id="search" placeholder={"Search Something"}/>
            <CiSearch className="Search-button"/>
        </div>
    )
}

export default Search;