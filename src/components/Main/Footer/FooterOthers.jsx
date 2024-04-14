import './FooterOthers.css'

function FooterOthers() {
    return (
        <footer className="FooterOthers">
            <h1>Others</h1>
            <div style={{marginLeft: ".5vw"}}>
                <p onClick={function (){window.location.href="/feedback"}}>Observations and recommendations</p>
                <p onClick={function (){window.location.href="/mdr"}}>Content Mdr</p>
                <p onClick={function (){window.location.href="/about"}}>About this Website</p>
                <p onClick={function (){window.location.href="/stories"}}>History and Fun</p>
                <p onClick={function (){window.location.href="/credits"}}>Credits</p>
            </div>
        </footer>
    )
}

export default FooterOthers;