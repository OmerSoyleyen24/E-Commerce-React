import { useContext } from "react"
import { CardContext } from "../../../context/CardProvider"
import { Link, useLocation } from "react-router-dom"
import "./Header.css"

const Header = ({ setIsSearchShow }) => {
    const { cardItems } = useContext(CardContext)
    const {pathname} = useLocation()
 
    return (
        <header id="header">
            <div id="global-notification">
                <div className="container">
                    <p>
                        SUMMER SALE FOR ALL SWIM SUITS AND FREE
                        EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
                    </p>
                    <a href="shop.html"> SHOP NOW</a>
                </div>
            </div>
            <div id="header-row">
                <div className="container">
                    <div id="header-wrapper">
                        <div id="header-mobile">
                            <i className="bi bi-list" id="btn-menu"></i>
                        </div>
                        <div id="header-left">
                            <Link to={"/"} className="logo">LOGO</Link>
                        </div>
                        <div id="header-center">
                            <nav id="navigation">
                                <ul id="menu-list">
                                    <li className="menu-list-item">
                                        <Link to={"/"} className={`menu-link ${pathname === "/" ? "active" : ""}`}>
                                            Home
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <ul className="menu-dropdown-content">
                                                <li>
                                                    <a href="#">Home Clean</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Collection</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Minimal</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Modern</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Parallax</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Strong</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Style</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home Unique</a>
                                                </li>
                                                <li>
                                                    <a href="#">Home RTL</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="menu-list-item megamenu-wrapper">
                                        <Link to={"/shop"} className={`menu-link ${pathname === "/shop" ? "active" : ""}`}>
                                            Shop
                                            <i className="bi bi-chevron-down"></i>
                                        </Link>
                                        <div className="menu-dropdown-wrapper">
                                            <div className="menu-dropdown-megamenu">
                                                <div className="megamenu-links">
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-product-title">
                                                            Shop Style
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Shop Standart</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Full</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Only Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Image Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Sub Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Liste</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Style 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Style 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Style 3</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-product-title">
                                                            Filter Layout
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Side Out</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Dropdown</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Filter Drawer</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="megamenu-products">
                                                        <h3 className="megamenu-product-title">
                                                            Shop Loader
                                                        </h3>
                                                        <ul className="megamenu-menu-list">
                                                            <li>
                                                                <a href="#">Shop Pagination</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Infinity</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shop Load More</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Modal</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Drawer</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cart Page</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="megamenu-single">
                                                    <a href="#">
                                                        <img src="/img/mega-menu.jpg" alt="mega-menu" />
                                                    </a>
                                                    <h3 className="megamenu-single-title">JOIN THE LAYERING GANG</h3>
                                                    <p className="megamenu-single-subtitle">Suspendisse faucibus nunc et
                                                        pellentesque</p>
                                                    <a href="#" className="megamenu-single-button btn btn-sm">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-list-item">
                                        <Link to={"/blog"} className="menu-link">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="menu-list-item">
                                        <Link to={"/contact"} className="menu-link">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                                <i className="bi bi-x-circle" id="close-sidebar"></i>
                            </nav>
                        </div>
                        <div id="header-right">
                            <div id="header-right-links">
                                <div id="header-account">
                                    <Link to={"/auth"}>
                                        <i className="bi bi-person"></i>
                                    </Link>
                                </div>
                                <div id="header-search">
                                    <button id="search-button"
                                        onClick={() => { setIsSearchShow(true) }}
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                                <div id="header-heart">
                                    <a href="#">
                                        <i className="bi bi-heart"></i>
                                    </a>
                                </div>
                                <div id="header-bag">
                                    <Link to={"/card"} className="header-card-link">
                                        <i className="bi bi-bag"></i>
                                        <span className="header-card-count">{cardItems.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header