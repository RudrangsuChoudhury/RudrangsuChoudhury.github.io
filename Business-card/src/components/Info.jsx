const Info=()=>{
    return(
        <div className="info">
            <img src="Images/AvatarMaker.png" className="image"/>
            <h1 className="Name">Rudrangsu Choudhury</h1>
            <h2 className="Job">Student</h2>
            <a className="project" href="https://rudrangsuchoudhury.github.io/Calculator/index.html" target="_blank">My Calculator Project</a>
            <div className="links">
            <a  className="link" href = "mailto: choudhuryrudrangsu@gmail.com" target="_blank">
            <button className="button">
                <img src="Images/email-address-icon.svg"/>
                <p>Email</p>
            </button>
            </a>
            <a  className="link1" href = "https://www.linkedin.com/in/rudrangsu-choudhury-0a990521b/" target="_blank">
            <button className="button button1">
                <img src="Images/png-transparent-blue-and-white-in-social-media-linkedin-computer-icons-website-button-get-linkedin-logo-s-miscellaneous-blue-text.png"/>
                <p>LinkedIn</p>
            </button>
            </a>
            </div>
        </div>
    )
}
export default Info;