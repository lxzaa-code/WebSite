import './Group.css'
import GroupLeft from "./GroupLeft";
import { FaArrowLeft } from "react-icons/fa";

function Group() {
    return (
        <div className="Group">
            <div className="Left">
                <GroupLeft />
            </div>
            <div className="Right">
                <h1>Group</h1>
                <div style={{ marginLeft: ".5vw" }}>
                    <p>Share your Idea</p>
                    <h2>&&</h2>
                    <p>Ask Questions</p>
                    <h2>&&</h2>
                    <p>PDF Books</p>
                </div>
                <button onClick={() => {
                    window.location.href = "https://qm.qq.com/q/ZQqvoa8Fcm"
                }}><FaArrowLeft />Join!</button>
            </div>
        </div>
    )
}

export default Group;