import './Nav.css';
import { FaChevronDown, FaGithub, FaMarkdown, FaRegFileCode } from "react-icons/fa";
import Search from "./Nav/Search";

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
                            <a rel="noreferrer" target={"_blank"} href="https://github.com">Github</a>
                            <a rel="noreferrer" target={"_blank"} href="https://godbolt.org">Compiler Explorer</a>
                            <a rel="noreferrer" target={"_blank"} href="https://zh.cppreference.com">Cpp Reference</a>
                            <a rel="noreferrer" target={"_blank"} href="https://stackoverflow.com">Stack Overflow</a>
                        </div>
                    </div>
                    <p>Website</p>
                    &nbsp;
                    <FaChevronDown id="ChevronDown" />
                </div>
                <a href="/handout">
                    <FaMarkdown className="Nav-Icon Icon-Link"/>
                </a>
                <a href="https://github.com/Mdr-C-Tutorial/C">
                    <FaGithub className="Nav-Icon Icon-Link" />
                </a>
                <a href="https://github.com/Mdr-C-Tutorial/Website">
                    <FaRegFileCode className="Nav-Icon Icon-Link" />
                </a>
            </div>
        </div>
    )
}

export default Nav;