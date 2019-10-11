import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/landing/Hero"
import About from "../components/landing/About"

const IndexPage = () => (
	<Layout>
		<SEO title="Konferencja samorządności" />
		<Hero></Hero>
		<About></About>
	</Layout>
)

export default IndexPage
