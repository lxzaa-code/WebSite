import './Chapter.css';
import {FaClock} from "react-icons/fa6";
import {GiPositionMarker} from "react-icons/gi";
import {Link} from "react-router-dom";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {parseSentence} from "../mess/markdownparser";
import Code from "./Code";

function Chapter02() {

    let code01 = `#include<stdio.h>

int main(void){
    printf("hello world");
};
`;
    return (
        <div className="Chapter">
            <div className="Chapter-Top">
                <h1>[1/7 章]: 概述 <span><FaClock/> 20分钟 [2/5 页]</span></h1>
                <hr/>
            </div>
            <div className="Chapter-Main">
                <div className="Chapter-Left">
                    <p onClick={() => {
                        const section2 = document.querySelector("#hello-world-03");
                        section2.scrollIntoView({behavior: "smooth"});
                    }}>代码</p>
                </div>
                <div className="Chapter-Right">
                    <div className="Current-Position">
                        <GiPositionMarker/>
                        <h6>当前位置</h6>
                        <a href='/'>主页</a>
                        <h6>></h6>
                        <a href="/tutorial">引导式教程</a>
                        <h6>></h6>
                        <h6>概述</h6>
                    </div>
                    <div className="Latest-Update"><FaClock/> <h6>最近更新 2024-05-02 | Mdr</h6></div>
                    <p dangerouslySetInnerHTML={{__html: parseSentence("本节中，我们将写一个可以输出 **hello world** 的小程序")}}></p>
                    <h2 id="hello-world-03">代码</h2>
                    <Code code={{str: code01}}/>
                    {/*<CodeBlock code={code01} language={"C"}></CodeBlock>*/}
                    {/*<div className="Code" id="Code-01-02-01">*/}
                    {/*    <div className="Code-Line">*/}
                    {/*        <div className="Code-Line-Number-Wrapper">*/}
                    {/*            <div className="Code-Line-Number">1</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <pre>*/}
                    {/*                <span className='Processor'>#include</span>*/}
                    {/*                <span className="String"> &lt;stdio.h&gt;</span>*/}
                    {/*            </pre>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="Code-Line">*/}
                    {/*        <div className="Code-Line-Number-Wrapper">*/}
                    {/*            <div className="Code-Line-Number">2</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="Code-Line">*/}
                    {/*        <div className="Code-Line-Number-Wrapper">*/}
                    {/*            <div className="Code-Line-Number">3</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <pre>*/}
                    {/*                <span className='KeyWord'>int</span>*/}
                    {/*                {" "}*/}
                    {/*                <span className="Function">main</span>*/}
                    {/*                {"("}*/}
                    {/*                <span className="KeyWord">void</span>*/}
                    {/*                {") {"}*/}
                    {/*            </pre>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="Code-Line">*/}
                    {/*        <div className="Code-Line-Number-Wrapper">*/}
                    {/*            <div className="Code-Line-Number">4</div>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <pre>*/}
                    {/*                <span className="Function">    printf</span>*/}
                    {/*            </pre>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="Chapter-Bottom">
                        <div className="Chapter-Bottom-Left">
                            <Link to="/tutorial/01/0"><FaArrowLeft/>上一页</Link>
                        </div>
                        <div className="Chapter-Bottom-Right">
                            <Link to="/tutorial/01/1">下一页<FaArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chapter02;