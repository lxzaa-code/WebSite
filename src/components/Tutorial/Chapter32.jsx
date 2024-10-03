import './Chapter.css';

import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Chapter32() {
    window.scrollTo(0, 0);
    return (
        <div>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/03/0"><FaArrowLeft />上一页</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/03/2">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter32;