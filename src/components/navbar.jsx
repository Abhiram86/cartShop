import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import logo from "../assets/logoforcartapp.jpeg"
export const Navbar = () => {
    return(
    <>
        <div className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <Link className="link" to="/">shop</Link>
            <Link className="link" to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    </>
    )
}