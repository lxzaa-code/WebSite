import './ButtonBar.css'
import { FaArrowRight } from "react-icons/fa";

function ButtonBar() {
    return (
        <div className="Button-Bar">
            <div id="Start-Button"
                onClick={() => {
                    window.location.href = "/tutorial"
                }}>
                Start
            </div>
            <div id="Discussion-Button"
                onClick={() => {
                    window.location.href = "/discussion"
                }}>
                Discussion
                <FaArrowRight />
            </div>
        </div>
    )
}

export default ButtonBar;