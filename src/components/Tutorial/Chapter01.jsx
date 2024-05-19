import './Chapter.css';
import { FaClock } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { parseSentence } from "../mess/markdownparser";

function Chapter01() {
    let para01 = "在这个章节中，我们将初步认识**C语言**，了解它的**历史**和**发展**；之后我们将学习C语言中**输出内容**到屏幕上的方法。";
    let para02 = "C语言于1972年由 **贝尔实验室** 的 *Dennie Ritch* 和 *Ken Thompson* 在开发 **UNIX** 操作系统时研制。";
    return (
        <div className="Chapter">
            <div className="Chapter-Top">
                <h1>[1/7 章]: 输出字符串 <span><FaClock /> 20分钟 [1/5 页]</span></h1>
                <hr />
            </div>
            <div className="Chapter-Main">
                <div className="Chapter-Left">
                    <p onClick={() => {
                        const section2 = document.querySelector("#hello-world-01");
                        section2.scrollIntoView({ behavior: "smooth" });
                    }}>历史</p>
                    <p onClick={() => {
                        const section2 = document.querySelector("#hello-world-02");
                        section2.scrollIntoView({ behavior: "smooth" });
                    }}>语言标准</p>
                </div>
                <div className="Chapter-Right">
                    <div className="Current-Position">
                        <GiPositionMarker />
                        <a href='/'>主页</a>
                        <h6>&gt;</h6>
                        <a href="/tutorial">引导式教程</a>
                        <h6>&gt;</h6>
                        <h6>输出字符串</h6>
                    </div>
                    <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                    <p dangerouslySetInnerHTML={{ __html: parseSentence(para01) }}></p>
                    <h2 id="hello-world-01">历史</h2>
                    <p dangerouslySetInnerHTML={{ __html: parseSentence(para02) }}></p>
                    <h2 id="hello-world-02">语言标准</h2>
                    <div className="Chapter-Bottom">
                        <div className="Chapter-Bottom-Left">

                        </div>
                        <div className="Chapter-Bottom-Right">
                            <Link to="/tutorial/01/1">下一页<FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chapter01;