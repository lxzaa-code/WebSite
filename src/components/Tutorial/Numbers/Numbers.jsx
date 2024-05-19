import './Numbers.css'
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import Chapter06 from '../Chapter06'

let arr = [<Chapter06 />];

function Numbers() {
    document.title = "Hello World | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            {arr[id]}
        </div>
    )
}

export default Numbers;