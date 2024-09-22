import './PageLanguageButton.css';

function PageLanguageButton() {
    return (
        <span className="PageLanguageButton">
            <p id="LanguageText">返回语言：</p>
            <p id="LanguageChinese">中文</p>
            <div className="LanguageContainer"
                id="LanguageContainer"
                onClick={
                    () => {
                        if (document.getElementById("LanguageContainer").style.flexDirection === "row") {
                            document.getElementById("LanguageChinese").style.color = "#555";
                            document.getElementById("LanguageEnglish").style.color = "rebeccapurple";
                            document.getElementById("LanguageContainer").style.flexDirection = "row-reverse";
                        } else {
                            document.getElementById("LanguageChinese").style.color = "rebeccapurple";
                            document.getElementById("LanguageEnglish").style.color = "#555";
                            document.getElementById("LanguageContainer").style.flexDirection = "row";
                        }
                    }
                }>
                <div className="LanguageBall" id="LanguageBall"></div>
            </div>
            <p id="LanguageEnglish">English</p>
        </span>
    )
}
export default PageLanguageButton;