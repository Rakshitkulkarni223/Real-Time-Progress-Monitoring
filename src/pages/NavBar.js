const NavBar = () => {

    return <nav className="navbar navbar-expand navbar-light topbar static-top shadow" style={{
        background: "rgb(2,0,36)"
    }}>

        <div className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <h5 className="text-light h5 mb-0"><a href="" style={{
                color: "#fff",
                textDecoration: "none"
            }}>Progress Dashboard</a></h5>
        </div>

        <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div id="navbar-profile" className="">
                        <span className="mr-2 d-none d-lg-inline text-light small">Rakshit Kulkarni</span>
                        <img className="img-profile rounded-circle" src="https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png" />
                    </div>
                </a>
            </li>
        </ul>
    </nav>
}

export default NavBar;