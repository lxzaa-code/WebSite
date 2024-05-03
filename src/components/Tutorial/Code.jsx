import './Code.css'
import hljs from "../mess/myHighlight";
import {setClipboard} from "../mess/setClipBoard";
import {FaCopy} from "react-icons/fa";

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

function Code({code}) {
    console.log(code.str);
    console.log(typeof code.str);
    let arr = my_split({code: code, s: '\n'});
    let lines = arr.map(item => <div className="Code-Line">
        <div className='Code-Line-Number-Wrapper'>
            <div className="Code-Line-Number">
                {item.id}</div>
        </div>
        <div>
            <pre dangerouslySetInnerHTML={{__html:hljs.highlight(item.content, {language: "c"}).value}}></pre>
        </div>
    </div>)
    console.log(lines);
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
        </div>
    )
}

export default Code