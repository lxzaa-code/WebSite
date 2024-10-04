import './TutorialButtonBar.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function TutorialButtonBar() {
    return (
        <div className="Tutorial-Button-Bar">
            <div id="Handout-Button"
                onClick={() => {
                    window.open("https://mdr.aymao.com/C");
                }}>
                <FaArrowLeft />
                Handout
            </div>
            <div id="Playground-Button"
                onClick={() => {
                    window.open("https://godbolt.org/z/1b965v1hx");
                }}>
                Playground
                <FaArrowRight />
            </div>
        </div>
    )
}

export default TutorialButtonBar;