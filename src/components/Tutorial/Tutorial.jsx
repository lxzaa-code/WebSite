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
    let para00 = "本页面为 **引导式教程**，查看讲义请点击上方 `Handout` 按钮。"
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
                    <Link to="/tutorial/02/0">对象与运算</Link>
                    <Link to="/tutorial/03/0">分支与循环</Link>
                    <Link to="/tutorial/04/0">函数与递归</Link>
                    <Link to="/tutorial/05/0">数组与指针</Link>
                    <Link to="/tutorial/06/0">结构与枚举</Link>
                    <Link to="/tutorial/07/0">并发与原子</Link>
                </div>
                <div className="Tutorial-Main-Article">
                    <p dangerouslySetInnerHTML={{ __html: parseSentence(para00) }}></p>
                    <h1 onClick={() => { window.location.href = "/tutorial/01/0" }}>输出字符串</h1>
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
                    <h1 onClick={() => { window.location.href = "/tutorial/02/0" }}>对象与运算</h1>
                    <h1 onClick={() => { window.location.href = "/tutorial/03/0" }}>分支与循环</h1>
                    <h1 onClick={() => { window.location.href = "/tutorial/04/0" }}>函数与递归</h1>
                    <h1 onClick={() => { window.location.href = "/tutorial/05/0" }}>数组与指针</h1>
                    <h1 onClick={() => { window.location.href = "/tutorial/06/0" }}>结构与枚举</h1>
                    <h1 onClick={() => { window.location.href = "/tutorial/07/0" }}>并发与原子</h1>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;