import './Chapter.css';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ParseSentence from '../mess/markdownparser';

function Chapter11() {
    window.scrollTo(0, 0);
    let para01 = "本节中，我们将初步认识 **C 语言**，了解它的 **历史** 和 **发展**。";
    let para02 = "C 语言于 1972 年由 **贝尔实验室** 的 *Dennie Ritch* 和 *Ken Thompson* 在开发 **UNIX** 操作系统时研制。";
    return (
        <div>
            <ParseSentence str={para01} />
            <h2 id="hello-world-01">历史</h2>
            <ParseSentence str={para02} />
            <h2 id="hello-world-02">语言标准</h2>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">

                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/01/1">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter11;