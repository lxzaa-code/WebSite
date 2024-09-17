import './Footer.css'
import FooterCopy from "./Footer/FooterCopy";
import FooterOthers from "./Footer/FooterOthers";
import FooterTools from "./Footer/FooterTools";

function Footer() {
    return (
        <div className="Footer">
            <p>More Activities will come <span
                style={{ color: "rebeccapurple !important", fontWeight: 500, fontSize: "3vw" }}>soon</span>
            </p>
            <div className="FooterBottom">
                <FooterCopy />
                <FooterOthers />
                <FooterTools />
            </div>
        </div>
    )
}

export default Footer;