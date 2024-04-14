import './Group.css'
import GroupLeft from "./GroupLeft";

function Group() {
    return (
        <div className="Group">
            <div className="Left">
                <GroupLeft/>
            </div>
            <div className="Right">
                <h1>Group</h1>
                <div style={{marginLeft: "1vw"}}>
                    <p>Share your Idea</p>
                    <p>&&</p>
                    <p>Ask Questions</p>
                    <p>&&</p>
                    <p>PDF Books</p>
                </div>
            </div>
        </div>
    )
}

export default Group;