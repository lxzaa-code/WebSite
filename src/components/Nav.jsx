import './Nav.css';
import { FaChevronDown, FaGithub, FaMarkdown, FaRegFileCode } from "react-icons/fa";
import Search from "./Nav/Search";
import {Link} from "react-router-dom";

function Nav({ user }) {
    return (
        <div className="Nav">
            <div className="Nav-Left">
                <p className="Nav-Left-Title">
                    Mdr-C-Tutorial
                </p>
                <Search />
            </div>
            <div className="Nav-Right">
                {
                    user ? <p className="Logged-In">{user}</p> :
                        <p className="Log-In" onClick={function () {
                            window.location.href = "/login"
                        }}>Log in</p>
                }
                <div className="Website">
                    <div className="WebsiteListContainer">
                        <div className="WebsiteList">
                            <Link rel="noreferrer" target={"_blank"} to="https://github.com">Github</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://godbolt.org">Compiler Explorer</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://zh.cppreference.com">Cpp Reference</Link>
                            <Link rel="noreferrer" target={"_blank"} to="https://stackoverflow.com">Stack Overflow</Link>
                        </div>
                    </div>
                    <p>Website</p>
                    &nbsp;
                    <FaChevronDown id="ChevronDown" />
                </div>
                <Link to="https://hfsz2313.github.io/C/#/">
                    <FaMarkdown className="Nav-Icon Icon-Link"/>
                </Link>
                <Link to="https://github.com/Mdr-C-Tutorial/C">
                    <FaGithub className="Nav-Icon Icon-Link" />
                </Link>
                <Link to="https://github.com/Mdr-C-Tutorial/Website">
                    <FaRegFileCode className="Nav-Icon Icon-Link" />
                </Link>
            </div>
        </div>
    )
}

export default Nav;