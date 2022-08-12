import React from "react";
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import github from "../images/github.png"
import gmail from "../images/gmail.png"
const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nhan.29.08.2002/">
                    <img className="social-network" src={facebook} alt="facebook" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nhan2908">
                <img className="social-network" src={twitter} alt="twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/LNThanhNhan">
                <img className="social-network" src={github} alt="github" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:luongnguyenthanhnhan2908@gmail.com">
                <img className="social-network" src={gmail} alt="gmail" />
                </a>
            </div>
            <div className="credit">
                <h3>Icons source</h3>
                <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Vitaly Gorbachev - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Vitaly Gorbachev - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Freepik - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a>
            </div>
        </footer>
    )
}
export default Footer