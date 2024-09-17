import './Tutorial.css'
import ReturnMainPage from "../mess/ReturnMainPage";
import TutorialButtonBar from "./TutorialButtonBar";
import { Link } from "react-router-dom";
import { parseSentence } from '../mess/markdownparser';
export function scrollToAnchor(anchorName) {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}

function Tutorial() {
    let para01 = "**本章主要探讨** `**printf**` **函数的用法。**"
    let para02 = "：讲述历史，发展，语言标准等。"
    let para03 = "：讲解 `printf` 函数输出 **字符串** 的功能。"
    let para04 = "：讲解如何给 `printf` 函数添加额外 **参数**，并用 **格式化字符** 将这些参数包含在输出的内容当中。"

    document.title = 'Guided-Tutorial | Mdr-C-Tutorial';
    return (
        <div className="Tutorial">
            <ReturnMainPage />
            <div className="Tutorial-Title">
                <h1><span><span>引导式</span>教程</span> Mdr-C-Tutorial</h1>
                <TutorialButtonBar />
            </div>
            <div className="Tutorial-Main">
                <div className="Tutorial-Main-Content">
                    <Link to="/tutorial/01/0">输出字符串</Link>
                    <Link to="/tutorial/02/0">数字和运算</Link>
                </div>
                <div className="Tutorial-Main-Article">
                    <h1>输出字符串</h1>
                    <p dangerouslySetInnerHTML={{ __html: parseSentence(para01) }}></p>
                    <p>
                        <Link to="/tutorial/01/0">1. C语言的基本知识</Link>
                        <p className="Tutorial-Main-Article-Inline-Para" dangerouslySetInnerHTML={{ __html: parseSentence(para02) }}></p>
                    </p>
                    <p>
                        <Link to="/tutorial/01/1">2. 输出字符串</Link>
                        <p className="Tutorial-Main-Article-Inline-Para" dangerouslySetInnerHTML={{ __html: parseSentence(para03) }}></p>
                    </p>
                    <p>
                        <Link to="/tutorial/01/2">3. 添加参数</Link>
                        <p className="Tutorial-Main-Article-Inline-Para" dangerouslySetInnerHTML={{ __html: parseSentence(para04) }}></p>
                    </p>
                    <h1>数字和运算</h1>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;