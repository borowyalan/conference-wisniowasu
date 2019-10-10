import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../../images/logo.png"

import "../../pages/mystyles.scss"
import "./header.css"

function Header({ siteTitle }) {
	const [isActive, setBurgerActive] = useState(false)
	return (
		<section className="section">
			<div className="container">
				<header className="header">
					<nav className="navbar">
						<div className="navbar-brand">
							<a className="navbar-item" href="/">
								<img src={logo} alt="Conferention logo" />
							</a>
							<a
								className={`navbar-burger burger ${
									isActive ? "is-active" : ""
								}`}
								onClick={() =>
									setBurgerActive(prevBurgerActive => !prevBurgerActive)
								}
							>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</a>
						</div>
						<div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
							<div className="navbar-start">
								<a href="" className="navbar-item">
									About
								</a>
								<a href="" className="navbar-item">
									FAQ
								</a>
							</div>
						</div>
					</nav>
				</header>
			</div>
		</section>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
