import './ButtonBar.css'
import {FaArrowRight} from "react-icons/fa";

function ButtonBar() {
    return (
        <div className="Button-Bar">
            <div id="Start-Button">
                Start
            </div>
            <div id="Discussion-Button"
                 onClick={function () {
                     window.location.href = "/Discussion"
                 }}
            >
                Discussion
                <FaArrowRight/>
            </div>
        </div>
    )
}

export default ButtonBar;