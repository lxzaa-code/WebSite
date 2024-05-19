import './Chapter.css';

import { FaClock } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Chapter05() {
    return (
        <div className="Chapter">
            <div className="Chapter-Top">
                <h1>[1/7 章]: 输出字符串 <span><FaClock /> 20分钟 [5/5 页]</span></h1>
                <hr />
            </div><div className="Chapter-Main">
                <div className="Chapter-Left">
                </div><div className="Chapter-Right">
                    <div className="Current-Position">
                        <GiPositionMarker />
                        <a href='/'>主页</a>
                        <h6>&gt;</h6>
                        <a href="/tutorial">引导式教程</a>
                        <h6>&gt;</h6>
                        <h6>输出字符串</h6>
                    </div>
                    <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-05-19 | Mdr</h6></div>

                    <div className="Chapter-Bottom">
                        <div className="Chapter-Bottom-Left">
                            <Link to="/tutorial/01/3"><FaArrowLeft />上一页</Link>
                        </div>
                        <div className="Chapter-Bottom-Right">
                            <Link to="/tutorial/02/0">下一章<FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chapter05;