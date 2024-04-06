import './Login.css'
import '../../css/ReturnMainPage.css'
import {FaArrowLeft} from "react-icons/fa";

function Login(){
    return (
        <div className="Log-In-Page">
            <div className="Log-In-Bar">
                <div className="Return-Main-Page"
                     onClick={function(){window.location.href="/"}}>
                    <FaArrowLeft/>
                    Return Homepage</div>
            </div>
        </div>
    )
}
export default Login