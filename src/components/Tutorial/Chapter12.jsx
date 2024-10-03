import './Chapter.css';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ParseSentence from "../mess/markdownparser";
import Code from "./Code";

function Chapter12() {
    window.scrollTo(0, 0);
    let code01 = `#include <stdio.h>

int main(void) {
    printf("Hello World!"); // output the string
    return 0;
};
`;

    let para01 = "本节中，我们将写一个可以输出 **hello world** 的小程序，并初试 `printf()` 函数 **输出字符串** 的用法！";
    let para02 = "C语言中有很多 **内置** 的 **函数**，他们在 **标准库** 中被定义。";
    let para03 = "函数 `printf` 在标准库的 `&lt;stdio.h&gt;` 这个文件中被定义，通过预处理器指令 `#include` 引入这个文件（要引入的文件名通过尖括号包裹）。标准库里面的任何内容都需要引入对应的文件之后才能使用。";
    let para04 = "`printf()` 函数可以只接收一个字符串，它会把这个字符串输出到屏幕上。请看下面的代码："
    let para05 = "如果运行这段代码，你会看到输出界面出现了一句 `Hello World!`，快试试吧！"

    let para11 = "在C语言中，**字符串** 是一些字符的排列，可以用来表示文字。比如，`\"Hello World!\"` 就是个字符串。";
    let para12 = "（注：其实对于 `\"Hello World!\"`，更准确的说法是：它是一个 **字符串字面量**。关于 **字符串字面量** 的内容请看讲义。）"

    return (
        <div>
            <ParseSentence str={para01} />

            <h2 id="hello-world-0201">什么是字符串</h2>
            <ParseSentence str={para11} />
            <ParseSentence str={para12} />
            <h2 id="hello-world-0202">printf 输出字符串</h2>
            <ParseSentence str={para02} />
            <ParseSentence str={para03} />
            <ParseSentence str={para04} />
            <Code code={{ str: code01 }} />
            <ParseSentence str={para05} />
            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/01/0"><FaArrowLeft />上一页</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/01/2">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter12;