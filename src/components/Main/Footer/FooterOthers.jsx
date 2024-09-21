import './FooterOthers.css'

function FooterOthers() {
    return (
        <footer className="FooterOthers">
            <h1>Others</h1>
            <div style={{ marginLeft: ".5vw" }}>
                <p onClick={() => {
                    window.location.href = "/feedback"
                }}>Observations and recommendations</p>
                <p onClick={() => {
                    window.open("https://qm.qq.com/q/dt2eY9PE8o")
                }}>Contact Mdr</p>
                <p onClick={() => {
                    window.location.href = "/about"
                }}>About this Website</p>
                <p onClick={() => {
                    window.location.href = "/stories"
                }}>History and Fun</p>
                <p onClick={() => {
                    window.location.href = "/credits"
                }}>Credits</p>
                <p onClick={() => {
                    window.location.href = "/tech"
                }}>Technology Stacks</p>
            </div>
        </footer>
    )
}

export default FooterOthers;