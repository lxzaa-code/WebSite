import './Chapter.css';
import {FaClock} from "react-icons/fa6";
import {GiPositionMarker} from "react-icons/gi";

function Chapter01() {

    return (
        <div className="Chapter">
            <div className="Chapter-Top">
                <h1>[1/7 章]: 概述 <span><FaClock/> 20分钟 [1/5 页]</span></h1>
                <hr/>
            </div>
            <div className="Chapter-Main">
                <div className="Chapter-Left">
                    <p onClick={() => {
                        const section2 = document.querySelector("#hello-world-01");
                        section2.scrollIntoView({behavior: "smooth"});
                    }}>历史</p>
                    <p onClick={() => {
                        const section2 = document.querySelector("#hello-world-02");
                        section2.scrollIntoView({behavior: "smooth"});
                    }}>语言标准</p>
                </div>
                <div className="Chapter-Right">
                    <div className="Current-Position">
                        <GiPositionMarker/>
                        <h6>当前位置</h6>
                        <a href='/'>主页</a>
                        <h6>></h6>
                        <a href="/tutorial">引导式教程</a>
                        <h6>></h6>
                        <h6>概述</h6>
                    </div>
                    <div className="Latest-Update"><FaClock/> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                    <p>在这个章节中，我们将初步认识C语言，了解它的历史和发展。</p>
                    <h2 id="hello-world-01">历史</h2>
                    <p>C语言于1972年由 <strong>贝尔实验室</strong> 的 <i>Dennie Ritch</i> 和 <i>Ken
                        Thompson</i> 在开发 <strong>UNIX</strong> 操作系统时研制。
                    </p>
                    <h2 id="hello-world-02">语言标准</h2>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p id="aaaa">1</p>
                </div>
            </div>
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">

                </div>
                <div className="Chapter-Bottom-Right">

                </div>
            </div>
        </div>
    )
}

export default Chapter01;