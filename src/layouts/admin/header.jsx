import { NavLink } from "react-router-dom";

function Header() {
    return (
    <div>
        <h1>
            Header!
        </h1>     
        <div>
            <ul>
                <li>
                    <NavLink to="/">/</NavLink>
                </li>
                <li>
                    <NavLink to="/login">/login</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">/dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">/blog</NavLink>
                </li>
            </ul>    
        </div>   
    </div>
    )
}

export default Header