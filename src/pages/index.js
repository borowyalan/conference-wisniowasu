import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Form from "../components/Landing/Form"

const IndexPage = () => (
	<Layout>
		<SEO title="Konferencja samorządności" />
		<Hero></Hero>
		<About></About>
		<Form></Form>
	</Layout>
)

export default IndexPage
