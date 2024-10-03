import './Chapter.css';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Chapter41() {
    window.scrollTo(0, 0);
    return (
        <div>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/03/2"><FaArrowLeft />上一章</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/04/1">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter41;