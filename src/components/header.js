import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "./siteLogo"

const Header = ({ siteTitle }) => (
    <header className="banner py-12">
        <div className="mx-auto px-5 w-full max-w-7xl">
            <Logo />

            <nav>
                <ul className="flex flex-wrap md:justify-evenly">
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/"
                            title="JAM Heroes"
                        >
                            <span
                                className="hidden md:block absolute top-0 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jam
                            </span>
                            <span className="font-heading">Heroes</span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/links"
                            title="Links"
                        >
                            <span
                                className="hidden md:block absolute top-0 right-0 text-xs"
                                aria-hidden="true"
                            >
                                fresh
                            </span>
                            <span className="font-heading">Links</span>
                            <span
                                className="hidden md:block absolute -bottom-2 right-0 text-xs"
                                aria-hidden="true"
                            >
                                resources
                            </span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/courses"
                            title="Jamstack Courses"
                        >
                            <span
                                className="hidden md:block absolute top-0 right-0 text-xs"
                                aria-hidden="true"
                            >
                                learn
                            </span>
                            <span className="font-heading">Courses</span>
                            <span
                                className="hidden md:block absolute -bottom-2 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jamstack
                            </span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/newsletter"
                            title="Newslettter"
                        >
                            <span
                                className="hidden md:block absolute top-0 right-0 text-xs"
                                aria-hidden="true"
                            >
                                hot
                            </span>
                            <span className="font-heading">Newsletter</span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/about"
                            title="About JAM Heroes"
                        >
                            <span
                                className="hidden md:block absolute top-0 right-0 text-xs"
                                aria-hidden="true"
                            >
                                more
                            </span>
                            <span className="font-heading">About</span>
                            <span
                                className="hidden md:block absolute -bottom-2 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jamheroes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a
                            className="relative text-2xl md:text-3xl text-white"
                            href="https://github.com/wassim/jamheroes"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Fork this project"
                        >
                            <span className="font-heading">Fork</span>
                            <span
                                className="hidden md:block absolute -bottom-2 right-0 text-xs"
                                aria-hidden="true"
                            >
                                me
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
