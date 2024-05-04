import './ReturnMainPage.css'
import {FaArrowLeft} from "react-icons/fa";

function ReturnMainPage() {
    return (
        <div className="Return-Main-Page">
            <div className="RMPButton"
                 onClick={function () {
                     window.location.href = "/"
                 }}>
                <FaArrowLeft/>
                Home
            </div>
        </div>
    )
}

export default ReturnMainPage;