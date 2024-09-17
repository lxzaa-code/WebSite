import './Chapter.css';

import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { parseSentence } from "../mess/markdownparser";
import Code from "./Code";
import { LineCode } from './Code';

function Chapter03() {
    let code01 = `#include <stdio.h>

int main(void) {
    printf("%d + %d = %d", 1, 2, 3);
    return 0;
}
`
    let code02 = `#include <stdio.h>
    
int main(void) {
    printf("%f is %d%%", 0.15, 15);
    printf("%%TEMP%%");
}
`
    let code03 = "printf(\"%d percent is %f.\", 35, 0.35)"

    let para01 = "`printf()` 函数有个更强大的功能：格式化输出。在本页的学习中你将学习如何用 `printf()` 函数格式化输出字符串。"
    let para02 = "在这个例子中，我们为 `printf()` 函数增加了额外的三个 **参数**，同时在字符串里面增加了三个“奇怪”的 `%d` 字样。"
    let para03 = "像 `%d` 这种以 **百分号** 开头的字符序列叫做 **格式化字符**。`printf()` 格式化输出时，会把字符串里面的格式化字符 **一一对应** 地替换成后面的参数。"
    let para04 = "有很多不同种类的格式化字符，这篇只介绍其中一些字母的功能。"
    let para05 = "格式化字符中百分号后面加的 *特定* **字母** 必须与后面对应位置参数的 **类型** 对应。比如 `%d` 对应整数，`%f` 对应小数，……"
    let para06 = "如果想 **输出百分号**，用 `%%`。请看下面的代码："

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para01) }}></p>
            <h2 id="hello-world-0301">为 printf 添加参数</h2>
            <Code code={{ str: code01 }}></Code>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para02) }}></p>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para03) }}></p>
            <h2 id="hello-world-0302">格式化字符的不同种类</h2>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para04) }}></p>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para05) }}></p>
            <LineCode code={{ str: code03 }}></LineCode>
            <p dangerouslySetInnerHTML={{ __html: parseSentence(para06) }}></p>
            <Code code={{ str: code02 }}></Code>

            <div className="Chapter-Bottom">
                <div className="Chapter-Bottom-Left">
                    <Link to="/tutorial/01/1"><FaArrowLeft />上一页</Link>
                </div>
                <div className="Chapter-Bottom-Right">
                    <Link to="/tutorial/01/3">下一页<FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Chapter03;