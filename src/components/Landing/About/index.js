import React from "react"
import handshake_icon from "../../../images/handshake.svg"
import coffee_icon from "../../../images/coffee.svg"
import friendship_icon from "../../../images/friendship.svg"
import lightbulb_icon from "../../../images/lightbulb.svg"

import "../../../pages/mystyles.scss"
import "./about.scss"

import Card from "./Card"

export default function About() {
	return (
		<section className="section" id="about">
			<div className={`container`}>
				<div className="">
					<h2 className={`title is- has-text-centered`}>O konferencji:</h2>
					<div className="columns is-multiline">
						<div className="column is-half">
							<Card title="Spotkajmy się by porozmawiać" icon={coffee_icon}>
								Spotkajmy się by porozmawiać - przy kawie czy herbacie dobrze
								się rozmawia. To świetna okazja do wymiany doświadczeń,
								odreagowania od szkolnej codzienności czy naładowania życiowej
								baterii.
							</Card>
						</div>
						<div className="column is-half">
							<Card title="Od uczniów dla uczniów" icon={handshake_icon}>
								Chcemy aby dzięki takim inicjatywom, uczniowie warszawskich
								szkół wpływali na otoczenie dookoła siebie i zmieniali swoje
								szkoły na lepsze.
							</Card>
						</div>
						<div className="column is-half">
							<Card title="Poznajmy się" icon={friendship_icon}>
								Jednym z powodów dla których zapraszamy was na Wiśniową, jest
								chęć umożliwienia nawiązania nowych wartościowych znajomości.
							</Card>
						</div>
						<div className="column is-half">
							<Card title="Burza mózgów" icon={lightbulb_icon}>
								W gronie aktywnych i kreatywnych łatwo wpada się na nowe pomysły
								oraz znajduje motywacje oraz partnerów do ich realizacji.
								Wymyślcie coś razem z nami!
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}