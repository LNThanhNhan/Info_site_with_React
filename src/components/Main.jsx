import React from "react";
import photo from '../images/IMG_20220215_120724.png'
const Main=()=>{
    return(
        <main className="main">
            <img className="photo" src={photo} alt="avatar_photo" />
            <div>
                <h1 className="name">Luong Nguyen Thanh Nhan</h1>
                <h4 className="position">College Student</h4>
                <div className="button">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:luongnguyenthanhnhan2908@gmail.com">
                    <button className="left-btn"><i class="fa-solid fa-envelope"></i>Email</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lnthanhnhan/">
                    <button className="right-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
                    </a>
                </div>
                <div className="info">
                <h2>About</h2>
                <p className="text">
                    I am a college student, currently studying at University of Information Technology, Ho Chi Minh city, VietNam. Although my major is Information System but I have intersting in React and web development. So right now, I'm pursuing to become a Frontend Developer.</p>
                <h2>Interests</h2>
                <p className="text">
                    Video games from Japan, Anime and manga. Pyschology. Philosophy. Cooking.
                </p>
                </div>
            </div>
        </main>
    )
}
export default Main