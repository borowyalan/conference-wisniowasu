import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
	<Layout>
		<SEO title="O nas" />
		<div className="section">
			<div className="container mainWrapper">
				<div className="container contentWrapper">
					<h1>Hi from the about page</h1>
					<p>Welcome to about</p>
				</div>
				<div className="columns">
					<div className="column is-half">sdf</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default AboutPage
