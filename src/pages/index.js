import React, { useState } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Form from "../components/Landing/Form"
import Popup from "../components/Landing/Popup"

export default function IndexPage() {
	const [isPopupOpen, changePopupState] = useState(false)
	return (
		<Layout>
			<SEO title="Konferencja samorządności" />
			<Hero></Hero>
			<About></About>
			<Form></Form>
			{isPopupOpen ? <Popup changePopupState={changePopupState}></Popup> : ""}
		</Layout>
	)
}

// export default IndexPage
