import "./navbar.scss";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="images/logo.svg" alt="logo img" />
                <span>Iamadmin</span>
            </div>
            <div className="icons">
                <img src="images/search.svg" alt="" className="icon" />
                <img src="images/app.svg" alt="" className="icon" />
                <img src="images/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="images/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile-pic" />
                    <span>Nobody</span>
                </div>
                <img src="images/settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
}

export default NavBar;