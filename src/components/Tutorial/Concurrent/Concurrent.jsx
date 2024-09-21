import './Concurrent.css';
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { FaClock } from "react-icons/fa6";
import Chapter71 from '../Chapter71';
import Chapter72 from '../Chapter72';
const arr = [<Chapter71 />, <Chapter72 />];

function ChapterLeft({ id }) { return (<></>) }

function Concurrent() {
    document.title = "并发与原子 | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            <div className="Chapter">
                <div className="Chapter-Top">
                    <h1>[7/7 章]: 并发与原子 <span><FaClock /> 35分钟 [{Number(id) + 1}/2 页]</span></h1>
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
                            <h6>并发与原子</h6>
                        </div>
                        <div className="Latest-Update"><FaClock /> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                        {arr[id]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concurrent;