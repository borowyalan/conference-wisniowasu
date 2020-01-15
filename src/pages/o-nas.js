import React from "react"

import LayoutSubpages from "../components/layoutSubpages"
import SEO from "../components/seo"

import "./mystyles.scss"
import "./subpages.scss"

const AboutPage = () => (
	<LayoutSubpages>
		<SEO title="O nas" />
		{/* <div id="about" className="section"> */}
			{/* <div className="container">
				<div className="coontainer titleContainer">
					<div className="columns">
						<div className="column is-three-fifths">
							<h1>O nas</h1>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Officiis atque officia culpa natus voluptatibus? Alias illum
								nihil eaque repellat impedit necessitatibus inventore explicabo
								eveniet maxime quisquam molestiae officia.
							</p>

							<div className="container contentContainer">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Cupiditate nostrum voluptas provident cum, repellendus aliquid
									quam dolorum eum recusandae saepe rerum quasi odit quos
									corrupti commodi? Quo quisquam quibusdam magni! Lorem ipsum
									dolor, sit amet consectetur adipisicing elit. Ea eligendi
									maxime sint officiis veritatis cupiditate ab deleniti veniam
									deserunt cumque! Nesciunt cum ipsam, delectus culpa quam
									aliquid ducimus id obcaecati?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Cupiditate nostrum voluptas provident cum, repellendus aliquid
									quam dolorum eum recusandae saepe rerum quasi odit quos
									corrupti commodi? Quo quisquam quibusdam magni! Lorem ipsum
									dolor, sit amet consectetur adipisicing elit. Ea eligendi
									maxime sint officiis veritatis cupiditate ab deleniti veniam
									deserunt cumque! Nesciunt cum ipsam, delectus culpa quam
									aliquid ducimus id obcaecati?
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Cupiditate nostrum voluptas provident cum, repellendus aliquid
									quam dolorum eum recusandae saepe rerum quasi odit quos
									corrupti commodi? Quo quisquam quibusdam magni! Lorem ipsum
									dolor, sit amet consectetur adipisicing elit. Ea eligendi
									maxime sint officiis veritatis cupiditate ab deleniti veniam
									deserunt cumque! Nesciunt cum ipsam, delectus culpa quam
									aliquid ducimus id obcaecati?
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="columns">
					<div className="column is-three-fifths"></div>
				</div>
			</div> */}

			<div id="faq" className="section">
				<div className="container">
					<div className="coontainer titleContainer">
						<div className="columns">
							<div className="column is-three-fifths">
								<h1>Kim jesteśmy?</h1>
								<div className="faq-section">
									{/* <h3>Kim jesteśmy?</h3> */}
									<p>
										Niektórzy znają się od dawna, niektórzy poznali się
										przypadkiem dzięki projektowi, niektórzy są partnerami,
										niektórzy przyjaciółmi. Lubimy gry, rysować, interesuje nas
										psychologia, czy nurkowanie, jesteśmy aspirującymi
										przyszłymi menedżerami, artystami, bądź obecnymi pilnymi
										uczniami. Jesteśmy też braćmi, siostrami, synami, córkami i
										przede wszystkim przyjaciółmi. To co nas łączy to pasja,
										która realizujemy poprzez samorządność – chęć zmieniania
										świata dookoła nas na lepsze. Wiemy jednak, że siła zmiany
										jest jej zasięg, dlatego sami nie naprawimy tego świata.
										Jako uczniowie technikum informatyczno-mechatronicznego
										znamy wartość nowych technologii i możliwości, jakich
										dostarczają, ale mimo to uważamy że nic nie zastąpi
										spotkania twarzą w twarz, dlatego zdecydowaliśmy się
										zorganizować konferencję.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="columns">
						<div className="column is-half"></div>
					</div>
				</div>
			</div>
		{/* </div> */}
	</LayoutSubpages>
)

export default AboutPage
