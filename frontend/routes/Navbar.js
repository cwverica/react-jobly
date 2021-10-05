import { Link, NavLink } from "react-router-dom";

/**  Navigation bar that shows up on every page.
 * 
 *  Rendered by App.js so it's highest possible level.
*/

function Navbar() {

    return (
        <nav className="Navbar">
            <Link className="nav-item brand" to='/'>
                Jobly
            </Link>
            <ul className="navbar-list">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}