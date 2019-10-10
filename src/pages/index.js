import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero></Hero>
		<About></About>
	</Layout>
)

export default IndexPage
