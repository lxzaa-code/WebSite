import './Code.css'
import hljs from "../mess/myHighlight";
import {setClipboard} from "../mess/setClipBoard";
import {FaCopy} from "react-icons/fa";
import React from "react";
import {VscRunAll, VscRunErrors} from "react-icons/vsc";
import {CiEdit} from "react-icons/ci";
import {MdOutlineEditOff} from "react-icons/md";

function my_split({code, s}) {
    let arr = [];
    code['str'].toString().split(s).forEach(line => {
        arr.push(line);
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = {id: i, content: arr[i]};
    }
    return arr;
}

function CodeRunner({work, code}) {
    console.log('coderunner')
    const [result, setResult] = React.useState("Running");
    console.log(result);
    if (work && (result === "Running" || result === "Failed")) {
        fetch('https://127.0.0.1').then((response) => {
            if (!response.ok) {
                setResult("Failed!")
            }
            setResult(response.json().toString())
        }).catch(() => {
            setResult("Failed")
        })
        return (<div className="CodeRunner">{result}</div>)
    } else {
        if (result === "Failed") setResult("Running");
        return (<div className="CodeRunnerNotWorked"><span style={{color: "rebeccapurple"}}>Click</span><span
            style={{color: "green", display: "flex", alignItems: "center"}}><VscRunAll/> Run</span> to run the code.
        </div>)
    }
}

function Code({code}) {
    const [run, setRun] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    let arr = my_split({code: code, s: '\n'});
    let lines = arr.map(item => <div className="Code-Line">
        <div className='Code-Line-Number-Wrapper'>
            <div className="Code-Line-Number">
                {item.id}</div>
        </div>
        <div>
            <pre dangerouslySetInnerHTML={{__html: hljs.highlight(item.content, {language: "c"}).value}}></pre>
        </div>
    </div>)
    return (
        <div className="Code">
            <div className="CodeInfo">
                <div className="CodeInfo-Left">C</div>
                <div className="CodeInfo-Right">
                    <button onClick={() => {
                        setClipboard(code.str)
                    }}>
                        <FaCopy/>
                        Copy
                    </button>
                    <button onClick={() => {
                        console.log("setRun")
                        setRun(!run);
                        console.log(run)
                    }} type={"button"}>
                        {run ? <span className="Button-Stop"><VscRunErrors/>Stop</span> :
                            <span className="Button-Run"><VscRunAll/>Run</span>}
                    </button>
                    <button onClick={() => {
                        setEdit(!edit)
                    }}>
                        {edit ? <MdOutlineEditOff/> : <CiEdit/>}
                        {edit ? "UnEdit" : "Edit"}
                    </button>
                </div>
            </div>
            <hr/>
            <div className="CodeContent">
                {lines.map((line) => (
                    <div>
                        {line}
                    </div>
                ))}
            </div>
            <CodeRunner work={run} code={code.str}/>
        </div>
    )
}

export default Code