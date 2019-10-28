import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./o-nas.scss"

const NotFoundPage = () => (
	<LayoutSubpages>
		<SEO title="404: Not found" />
		<section id="error">
			<h1>:(</h1>
			<p>Nie znależliśmy takiej strony.</p>
		</section>
	</LayoutSubpages>
)

export default NotFoundPage
