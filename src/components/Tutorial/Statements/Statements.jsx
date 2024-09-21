import './Statements.css';
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import Chapter31 from '../Chapter31';
import Chapter32 from '../Chapter32';
import Chapter33 from '../Chapter33';

function ChapterLeft() { return <></> }

const arr = [<Chapter31 />, <Chapter32 />, <Chapter33 />]

function Statements() {
    document.title = "分支与循环 | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            <div className="Chapter">
                <div className="Chapter-Top">
                    <h1>[3/7 章]: 分支与循环 <span><FaClock /> 35分钟 [{Number(id) + 1}/3 页]</span></h1>
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
                            <h6>分支与循环</h6>
                        </div>
                        <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                        {arr[id]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statements;