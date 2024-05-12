import './Tutorial.css'
import ReturnMainPage from "../mess/ReturnMainPage";
// import Chapter01 from "./Chapter01";
// import Chapter02 from "./Chapter02";
// import Chapter03 from "./Chapter03";
// import Chapter04 from "./Chapter04";
// import Chapter05 from "./Chapter05";
// import Chapter06 from "./Chapter06";
// import Chapter07 from "./Chapter07";
// import Chapter08 from "./Chapter08";
// import Chapter09 from "./Chapter09";
// import Chapter10 from "./Chapter10";
import TutorialButtonBar from "./TutorialButtonBar";
import { Link } from "react-router-dom";
//
// function Process({process, number}) {
//     console.log(process, number);
//     if (process === number)
//         return <span className="Chapter-Current"></span>;
//     if (process < number)
//         return <span className="Chapter-Future"></span>;
//     else return <span className="Chapter-Finished"></span>;
// }
//
// function Chapter({number}) {
//     let arr = [<Chapter01/>, <Chapter02/>, <Chapter03/>, <Chapter04/>, <Chapter05/>, <Chapter06/>, <Chapter07/>,
//         <Chapter08/>, <Chapter09/>, <Chapter10/>];
//     if (number >= 0 && number < 10) {
//         return arr[number - 1];
//     } else return <div>error</div>;
// }

export function scrollToAnchor(anchorName) {
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }
}

function Tutorial() {

    // let process;
    // if (localStorage.getItem("Mdr-C-Guided-Tutorial") === undefined) {
    //     localStorage.setItem("Mdr-C-Guided-Tutorial", "1");
    //     process = 1;
    // } else {
    //     process = Number(localStorage.getItem("Mdr-C-Guided-Tutorial"));
    // }
    document.title = 'Guided-Tutorial | Mdr-C-Tutorial';
    return (
        <div className="Tutorial">
            <ReturnMainPage />
            <div className="Tutorial-Title">
                <h1><span>引导式教程</span> Mdr-C-Tutorial</h1>
                <TutorialButtonBar />
                {/*<div className="Process">*/}
                {/*    <Process process={process} number={1}/>*/}
                {/*    <Process process={process} number={2}/>*/}
                {/*    <Process process={process} number={3}/>*/}
                {/*    <Process process={process} number={4}/>*/}
                {/*    <Process process={process} number={5}/>*/}
                {/*    <Process process={process} number={6}/>*/}
                {/*    <Process process={process} number={7}/>*/}
                {/*    <Process process={process} number={8}/>*/}
                {/*    <Process process={process} number={9}/>*/}
                {/*    <Process process={process} number={10}/>*/}
                {/*</div>*/}
            </div>
            {/*<Chapter number={process}/>*/}
            <div className="Tutorial-Main">
                <div className="Tutorial-Main-Content">
                    <Link to="/tutorial/01/0">Hello world</Link>
                    <Link to="/tutorial/02/0">Hello world</Link>
                </div>
                <div className="Tutorial-Main-Article">
                    <h1>Hello World</h1>
                </div>
            </div>
        </div>
    )
}

export default Tutorial;