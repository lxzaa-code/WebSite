import './StructuresEnums.css'
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import Chapter61 from '../Chapter61';
import Chapter62 from '../Chapter62';
import Chapter63 from '../Chapter63';
const arr = [<Chapter61 />, <Chapter62 />, <Chapter63 />];

function ChapterLeft({ id }) { return (<></>) }

function StructuresEnums() {
    document.title = "结构与枚举 | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            <div className="Chapter">
                <div className="Chapter-Top">
                    <h1>[6/7 章]: 结构与枚举 <span><FaClock /> 35分钟 [{Number(id) + 1}/3 页]</span></h1>
                    <hr />
                </div>
                <div className="Chapter-Main">
                    <ChapterLeft id={id} />
                    <div className="Chapter-Right">
                        <div className="Current-Position">
                            <GiPositionMarker />
                            <a href='/'>主页</a>
                            <h6>&gt;</h6>
                            <a href="/tutorial">引导式教程</a>
                            <h6>&gt;</h6>
                            <h6>结构与枚举</h6>
                        </div>
                        <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-09-22 | Mdr</h6></div>
                        {arr[id]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StructuresEnums;