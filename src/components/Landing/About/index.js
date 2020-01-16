import React from "react"
import handshake_icon from "../../../images/handshake.svg"
import coffee_icon from "../../../images/coffee.svg"
import friendship_icon from "../../../images/friendship.svg"
import lightbulb_icon from "../../../images/lightbulb.svg"

import "../../../pages/mystyles.scss"
import "./about.scss"
export default function About() {
	return (
		<section className="section" id="about">
			<div className={`container`}>
				<div className="">
					<h2 className={`title is- has-text-centered`}>O konferencji:</h2>
					<div className="columns is-multiline">
						<div className="column is-half">
							<div className="box">
								<article className="media">
									<div className="media-left">
										{/* <FontAwesomeIcon icon={faCoffee} /> */}
										<img src={coffee_icon} alt="" srcset="" />
									</div>
									<div className="media-content">
										<div className="content">
											<h3 className="title is-3 is-size-4-mobile">
												Spotkajmy się by porozmawiać.
											</h3>
											<p className="is-size-5 is-size-6-mobile">
												Przy kawie czy herbacie dobrze się rozmawia. To świetna
												okazja do wymiany doświadczeń, odreagowania od szkolnej
												codzienności czy naładowania życiowej baterii.
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
						<div className="column is-half">
							<div className="box">
								<article className="media">
									<div className="media-left">
										{/* <FaGraduationCap size="1em" className="fa-fw" /> */}
										<img src={handshake_icon} alt="" srcset="" />
									</div>
									<div className="media-content">
										<div className="content">
											<h3 className="title is-3 is-size-4-mobile">
												Od uczniów dla uczniów
											</h3>
											<p className="is-size-5 is-size-6-mobile">
												chcemy aby dzięki takim inicjatywom, uczniowie
												warszawskich szkół wpływali na otoczenie dookoła siebie
												i zmieniali swoje szkoły na lepsze.
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
						<div className="column is-half">
							<div className="box">
								<article className="media">
									<div className={`media-left fa-fw`}>
										<img src={friendship_icon} alt="" srcset=""/>
									</div>
									<div className="media-content">
										<div className="content">
											<h3 className="title is-3 is-size-4-mobile">
												Lorem ipsum
											</h3>
											<p className="is-size-5 is-size-6-mobile">
												jednym z powodów dla których zapraszamy was na Wiśniową,
												jest chęć umożliwienia nawiązania nowych wartościowych
												znajomości.
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
						<div className="column is-half">
							<div className="box">
								<article className="media">
									<div className={`media-left fa-fw`}>
										{/* <FaLightbulb size="1em" className="fa-fw" /> */}
										<img src={lightbulb_icon} alt="" srcset="" />
									</div>
									<div className="media-content">
										<div className="content">
											<h3 className="title is-3 is-size-4-mobile">
												Lorem ipsum
											</h3>
											<p className="is-size-5 is-size-6-mobile">
												W gronie aktywnych i kreatywnych łatwo wpada się na nowe
												pomysły oraz znajduje motywacje oraz partnerów do ich
												realizacji. Wymyślcie coś razem z nami!
											</p>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
