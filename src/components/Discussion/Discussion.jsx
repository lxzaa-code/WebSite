import './Discussion.css';
import ReturnMainPage from "../mess/ReturnMainPage";

function Discussion() {
    document.title = "Discussion | Mdr-C-Tutorial";
    return (
        <div className="Discussion">
            <ReturnMainPage />
            <div className="DiscussionContainer">
                <h1>由于某些原因，延迟上线</h1>
            </div>
        </div>
    )
}

export default Discussion;