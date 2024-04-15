import './Discussion.css';
import ReturnMainPage from "../mess/ReturnMainPage";

function Discussion() {
    document.title = "Discussion | Mdr-C-Tutorial";
    return (
        <div className="Discussion">
            <div className="Discussion-Bar">
                <ReturnMainPage />
            </div>
        </div>
    )
}
export default Discussion;