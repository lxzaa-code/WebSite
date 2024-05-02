import './TutorialButtonBar.css';
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function TutorialButtonBar() {
    return (
        <div className="Tutorial-Button-Bar">
            <div id="Handout-Button"
                 onClick={() => {
                     window.location.href = "https://hfsz2313.github.io/C/#/"
                 }}>
                <FaArrowLeft/>
                Handout
            </div>
            <div id="Playground-Button"
                 onClick={() => {
                     window.location.href = "/playground"
                 }}>
                Playground
                <FaArrowRight/>
            </div>
        </div>
    )
}

export default TutorialButtonBar;