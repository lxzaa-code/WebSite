import './Code.css'

function my_split({code, s}) {
    let arr = [];
    console.log(code);
    code['str'].toString().split(s).forEach(line => {
        arr.push(line);
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = {id: i, content: arr[i]};
    }
    console.log(arr);
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
        <div><pre>{item.content}</pre></div>
    </div>)
    console.log(lines);
    return (
        <div className="Code">
            {lines.map((line) => (
                <div>
                    {line}
                </div>
            ))}
        </div>
    )
}

export default Code