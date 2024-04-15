import './Footer.css'
import FooterCopy from "./Footer/FooterCopy";
import FooterOthers from "./Footer/FooterOthers";

function Footer() {
    return (
        <div className="Footer">
            <p>More Activities will come soon</p>
            <div className="FooterBottom">
                <FooterCopy />
                <FooterOthers />
            </div>
        </div>
    )
}

export default Footer;