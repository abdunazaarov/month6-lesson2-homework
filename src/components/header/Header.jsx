import "./Header.scss"
import Logo from "../../assets/Logo.svg"
import Search from "../../assets/Search.png"
import Person from "../../assets/Person.png"
import Shopping from "../../assets/Shopping.png"


const navbarItems = ["Home", "Brands", "Recent Products", "About", "Contact"]


function Header(){
    return <header className="header">
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo"><img src={Logo} alt="Logo" /></div>
                <ul className="navbar__list">
                    {
                        navbarItems.map((link, inx) => {
                            return <li key={inx} className="navbar__items">
                                <a className="navbar__link" href="#">
                                    <span>{link}</span>
                                </a>
                            </li>
                        })
                    }
                </ul>
                <div className="navbar__icons">
                    <img src={Search} alt="" />
                    <img src={Person} alt="" />
                    <img src={Shopping} alt="" />
                </div>
            </nav>
        </div>
    </header>
}

export default Header