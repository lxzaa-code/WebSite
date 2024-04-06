import './Login.css'
import './ReturnMainPage.css'
import ReturnMainPage from "./ReturnMainPage";

function Login(){
    return (
        <div className="Log-In-Page">
            <div className="Log-In-Bar">
                <ReturnMainPage/>
            </div>
        </div>
    )
}
export default Login