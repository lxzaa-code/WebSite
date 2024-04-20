import './ReturnMainPage.css'
import { FaArrowLeft } from "react-icons/fa";

function ReturnMainPage() {
    return (
        <div className="Return-Main-Page"
            onClick={function () {
                window.location.href = "/"
            }}>
            <FaArrowLeft />
            Return Homepage</div>
    )
}

export default ReturnMainPage;