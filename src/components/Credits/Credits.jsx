import './Credits.css';
import ReturnMainPage from '../mess/ReturnMainPage';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaWifi } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';

function Credits() {
    document.title = "Credits | Mdr-C-Tutorial";
    return (
        <div className="Credits">
            <ReturnMainPage />
            <h1>Credits</h1>
            <h2>Contributors</h2>
            <div className="Credits-Wrapper">
                <div className="Credits-Item Big Credits-Mdr">
                    <span>mdr</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Minsecrus"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>@幻</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/huan201"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item Big Credits-LYX">
                    <span>LY-Xiang</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/LY-Xiang"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>JuaJuanchi</span><div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Jua-Juanchi"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>No</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Kroner"><FaGithub /></Link>
                        <Link rel="noreferrer" target={"_blank"} to="https://www.cnblogs.com/Kroner"><FaWifi /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>xly</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/LY-Xiang"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>革匊习习中</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Juvwxyz"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>初心不变-叶子</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/FHU-yezi"><FaGithub /></Link>
                        <Link rel="noreferrer" target={"_blank"} to="https://www.jianshu.com/u/ea36c8d8aa30"><IoLogoJavascript /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>0x7E7</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/20080217"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>菲露露</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/LovelyLavender4"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>Telecomadm</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/telecomadm1145"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item Big Credits-WT">
                    <span>WHITE TREE</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/VinbeWan"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item Big Credits-XIAOYI">
                    <span>XIAOYI12</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/xiaoyi1212"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>Min0911Y</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/min0911Y"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>A4-Tacks</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/A4-Tacks"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>ChatRBQ</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/fawdlstty"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>Kill</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Killcerr"><FaGithub /></Link>
                    </div>
                </div>
            </div>
            <h2>Organizations</h2>
            <div className="Credits-Wrapper">

            </div>
            <h2>Special</h2>
            <div className="Credits-Wrapper">
                <div className="Credits-Item">
                    <span>FrankHB</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/FrankHB"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>Jajuju</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/frederick-vs-ja"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>Fresky</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/Freskyz"><FaGithub /></Link>
                    </div>
                </div>
                <div className="Credits-Item">
                    <span>兔兔</span>
                    <div className="Credits-Item-Links">
                        <Link rel="noreferrer" target={"_blank"} to="https://github.com/RGSS3"><FaGithub /></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Credits;