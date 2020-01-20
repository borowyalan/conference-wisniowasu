import React, { useState } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Landing/Hero"
import About from "../components/Landing/About"
import Form from "../components/Landing/Form"
import Popup from "../components/Landing/Popup"
import FormModal from "../components/Landing/FormModal"

export default function IndexPage() {
	const [isModalOpen, changeModalState] = useState(false)
	return (
		<Layout>
			<SEO title="Strona główna" />
			<Hero></Hero>
			<About></About>
			<Form isModalOpen={changeModalState}></Form>
			<FormModal
				changeModalState={changeModalState}
				isModalOpen={isModalOpen}
			></FormModal>
			{/* {isPopupOpen ? <Popup changePopupState={changePopupState}></Popup> : ""} */}
		</Layout>
	)
}
