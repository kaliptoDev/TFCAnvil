import "./Header.css"
import { useState } from "react"

const Header = () => {

    const [TFCToolsStyle, setTFCToolsStyle] = useState('')

    const [TFCToolsChevronStyle, setTFCToolsChevronStyle] = useState('')
    // const [MCToolsStyle, setMCToolsStyle] = useState('')
    const [MCToolsChevronStyle, setMCToolsChevronStyle] = useState('')
    // const [ResourcesStyle, setResourcesStyle] = useState('')
    const [ResourcesChevronStyle, setResourcesChevronStyle] = useState('')



    return (
        <div className="header">
            {/* <div className="header__background"></div>
            <div className="header__logo"></div> */}

            <div className="header__menu__title">
                <h1 className="header__main__title">MC Tools</h1>
            </div>

            <div className="header__menu">
                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">TFC Tools</h1>
                    </a>
                    <div className="header__menu__item__arrow"
                        onClick={() => {
                            if (TFCToolsStyle === '') {
                                setTFCToolsStyle('header__sub__menu__active')
                                setTFCToolsChevronStyle('header__chevron__active')
                            } else {
                                setTFCToolsStyle('')
                                setTFCToolsChevronStyle('')
                            }
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                if (TFCToolsStyle === '') {
                                    setTFCToolsStyle('header__sub__menu__active')
                                    setTFCToolsChevronStyle('header__chevron__active')
                                } else {
                                    setTFCToolsStyle('')
                                    setTFCToolsChevronStyle('')
                                }
                            }
                        }}
                    >
                        <img src="/svgs/chevron.svg" alt="chevron" className={`header__chevron ${TFCToolsChevronStyle}`} />
                    </div>
                    <div className={`header__menu__item__sub ${TFCToolsStyle}`}>
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
                    <div className="header__menu__item__arrow"
                        onClick={() => {
                            if (MCToolsChevronStyle === '') {
                                setMCToolsChevronStyle('header__chevron__active')
                            } else {
                                setMCToolsChevronStyle('')
                            }
                        }
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                if (MCToolsChevronStyle === '') {
                                    setMCToolsChevronStyle('header__chevron__active')
                                } else {
                                    setMCToolsChevronStyle('')
                                }
                            }
                        }}
                    >
                        <img src="/svgs/chevron.svg" alt="chevron" className={`header__chevron ${MCToolsChevronStyle}`} />
                    </div>
                </div>

                <div className="header__menu__item">
                    <a href="/" className="header__link">
                        <h1 className="header__title">Resources</h1>
                    </a>
                    <div className="header__menu__item__arrow"
                        onClick={() => {
                            if (ResourcesChevronStyle === '') {
                                setResourcesChevronStyle('header__chevron__active')
                            } else {
                                setResourcesChevronStyle('')
                            }
                        }
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                if (ResourcesChevronStyle === '') {
                                    setResourcesChevronStyle('header__chevron__active')
                                } else {
                                    setResourcesChevronStyle('')
                                }
                            }
                        }}
                    >
                        <img src="/svgs/chevron.svg" alt="chevron" className={`header__chevron ${ResourcesChevronStyle}`} />
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

                <div className="header__connection">
                    <div className="header__connection__item header__menu__item">
                        <a href="/" className="header__link">
                            <h1 className="header__title">Login</h1>
                        </a>
                    </div>
                    <div className="header__connection__item header__menu__item">
                        <a href="/" className="header__link">
                            <h1 className="header__title">Register</h1>
                        </a>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Header