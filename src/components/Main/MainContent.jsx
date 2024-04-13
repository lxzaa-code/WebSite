import './MainContent.css'
import Playground from "./MainContent/Playground";
import Group from "./MainContent/Group";

function MainContent() {
    return(
        <div className="MainContent">
            <Playground/>
            <Group/>
        </div>
    )
}

export default MainContent;