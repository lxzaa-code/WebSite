import './Playground.css'
import PlaygroundRight from "./PlaygroundRight";
import {FaArrowRight} from "react-icons/fa";

function Playground() {
    return (
        <div className="Playground">
            <div className="Left">
                <h1>Playground</h1>
                <div>
                    <p>To Run Your Code</p>
                    <p>In Any Time</p>
                </div>
                <h2>ps: Only C Supported</h2>
                <button>Go!<FaArrowRight/></button>
            </div>
            <div className="Right">
                <PlaygroundRight/>
            </div>
        </div>
    )
}

export default Playground;