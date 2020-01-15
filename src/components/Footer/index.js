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
			<div class="content">
				<p>
					<strong>@Konferencja Wiśniowej</strong>
				</p>
			</div>
		</footer>
	)
}

export default Footer
