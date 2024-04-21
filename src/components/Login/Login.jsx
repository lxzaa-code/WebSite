import './Login.css'
import '../mess/ReturnMainPage.css'
import ReturnMainPage from "../mess/ReturnMainPage";

function Login() {
    document.title = "Login | Mdr-C-Tutorial";
    return (
        <div className="Log-In-Page">
            <ReturnMainPage/>
        </div>
    )
}

export default Login