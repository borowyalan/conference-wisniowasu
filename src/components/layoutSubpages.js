/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.scss"

const LayoutSubpages = ({ children }) => {
	return (
		<div className="wrapper--subpages">
			<Header siteTitle={""} />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

LayoutSubpages.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutSubpages
