import './HelloWorld.css'
import Chapter01 from "../Chapter01";
import ReturnMainPage from "../../mess/ReturnMainPage";
import {useParams} from "react-router-dom";
import Chapter02 from "../Chapter02";

let arr=[<Chapter01/>,<Chapter02/>];

function HelloWorld() {
    const params = useParams()
    let id = params.id
    return(
        <div className="HelloWorld">
            <ReturnMainPage/>
            {arr[id]}
        </div>
    )
}
export default HelloWorld