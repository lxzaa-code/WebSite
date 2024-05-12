import './HelloWorld.css'
import Chapter01 from "../Chapter01";
import ReturnMainPage from "../../mess/ReturnMainPage";
import { useParams } from "react-router-dom";
import Chapter02 from "../Chapter02";
import Chapter03 from "../Chapter03";

let arr = [<Chapter01 />, <Chapter02 />, <Chapter03 />];

function HelloWorld() {
    document.title = "HelloWorld | Mdr-C-Tutorial"
    const params = useParams()
    let id = params.id
    return (
        <div className="HelloWorld">
            <ReturnMainPage />
            {arr[id]}
        </div>
    )
}
export default HelloWorld