import './Chapter.css';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Chapter06() {
    return (
        <div>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/01/4"><FaArrowLeft />上一章</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/02/0">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter06;