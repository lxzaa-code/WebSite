import './FooterTools.css';

function FooterTools() {
    return (
        <footer className="FooterTools">
            <h1>Tools</h1>
            <div style={{ marginLeft: ".5vw" }}>
                <p onClick={() => {
                    window.location.href = "https://visualstudio.microsoft.com/zh-hans/vs/"
                }}>Visual Studio 2022</p>
                <p onClick={() => {
                    window.location.href = "https://code.visualstudio.com/Download/"
                }}>Visual Studio Code</p>
                <p onClick={() => {
                    window.location.href = "https://www.devcpp6.com/"
                }}>Dev C++ 6.0 g</p>
            </div>
        </footer>
    )
}

export default FooterTools;