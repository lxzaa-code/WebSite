import './Credits.css';
import ReturnMainPage from '../mess/ReturnMainPage';
import { Link } from 'react-router-dom';
import { FaHeart, FaGithub } from "react-icons/fa";
import { FaWifi } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';

function Credits() {
    document.title = "Credits | Mdr-C-Tutorial";
    return (
        <div className="Credits">
            <ReturnMainPage />
            <h1>Credits</h1>
            <div className="Credits-Item">
                <p>Xinlan Lu <FaHeart /></p>
            </div>
            <div className="Credits-Item">
                <p>Yutong Liu <FaHeart /></p>
            </div>
            <div className="Credits-Item">
                <p>Dan Feng <FaHeart /></p>
            </div>
            <div className="Credits-Item">
                <p>Feilulu <FaHeart /></p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/LovelyLavender4"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>mdr</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/Minsecrus"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>@幻</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/huan201"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>JuaJuanchi</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/Jua-Juanchi"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>No</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/Kroner"><FaGithub /></Link>
                <Link rel="noreferrer" target={"_blank"} to="https://www.cnblogs.com/Kroner"><FaWifi /></Link>
            </div>
            <div className="Credits-Item">
                <p>xly</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/LY-Xiang"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>革匊习习中</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/Juvwxyz"><FaGithub /></Link>
            </div>
            <div className="Credits-Item">
                <p>初心不变-叶子</p>
                <Link rel="noreferrer" target={"_blank"} to="https://github.com/FHU-yezi"><FaGithub /></Link>
                <Link rel="noreferrer" target={"_blank"} to="https://www.jianshu.com/u/ea36c8d8aa30"><IoLogoJavascript /></Link>
            </div>
        </div>
    )
}

export default Credits;