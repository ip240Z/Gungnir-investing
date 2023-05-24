import { Link } from "react-router-dom"
import "./css/Header.css"
import logo from "./logo.png"

let Header = () => {

    return (
     <header className="headerWrapper">
        <div className="logoWrapper">
            <img className="logo" src={logo} />
        </div>
        <div>
            <span>
                <Link className="navLink" to={"/"}>Home</Link>
            </span>
        </div>
     </header>
    )
}

export default Header