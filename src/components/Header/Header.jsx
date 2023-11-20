import "./Header.css"

import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <div className="header__background"></div>
            <div className="header__logo"></div>


            <div className="header__menu">
                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">TFC Tools</h1>
                    </a>
                    <div className="header__menu__item__arrow">
                        <i className="header__chevron"></i>
                    </div>
                    <div className="header__menu__item__sub">
                        <div className="header__menu__item__sub__item">
                            <a href="/" className="header__link">
                                <h1 className="header__title">Anvil Calculator</h1>
                            </a>
                        </div>
                        <div className="header__menu__item__sub__item">
                            <a href="/" className="header__link">
                                <h1 className="header__title">Alloy Calculator</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">Minecraft Tools</h1>
                    </a>
                    <div className="header__menu__item__arrow">
                        <i className="header__chevron"></i>
                    </div>
                </div>

                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">Resources</h1>
                    </a>
                    <div className="header__menu__item__arrow">
                        <i className="header__chevron"></i>
                    </div>
                </div>

                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">Suggestions</h1>
                    </a>
                </div>

                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">Contact</h1>
                    </a>
                </div>

            </div>
        </div>

    )
}

export default Header