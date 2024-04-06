import './Main.css'
import ButtonBar from "./Main/ButtonBar";

function Main(){
    return(
        <div className="Main">
            <div className="Main-Top">
                <p id="Title-1">A</p>
                <p id="Title-2">Free</p>
                <p id="Title-3">C Tutorial</p>
                <p id="Subtitle">Standard, Original and Dedicated</p>
                <ButtonBar/>
            </div>
        </div>
    )
}

export default Main