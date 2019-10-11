import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

import "../../pages/mystyles.scss"
import "./footer.scss"

function Footer({ siteTitle }) {
	const [isActive, setBurgerActive] = useState(false)
	return (
		<footer id="footer" class="footer">
			<div class="content has-text-centered">
				<p>
					<strong>@Konferencja Wiśniowej</strong> by{" "}
					<a href="https://jgthms.com">Borowy Alan</a>. This page is open
					source:{" "}
					<a href="https://github.com/borowyalan/wisniowasu-gatsby">GitHub</a>.
				</p>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	siteTitle: PropTypes.string,
}

Footer.defaultProps = {
	siteTitle: ``,
}

export default Footer
