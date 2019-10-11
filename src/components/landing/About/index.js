import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

import "../../pages/mystyles.scss"
import "./about.scss"

export default function About() {
	return (
		<section className="section" id="about">
			<div className="container">
				<h2 className={`title is- has-text-centered`}>O nas:</h2>
				<div className="columns is-multiline">
					<div className="column is-half">
						<div className="box">
							<article className="media">
								<div className="media-left">
									<FontAwesomeIcon icon={faCoffee} />
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Lorem ipsum</h3>
										<p className="is-size-5 is-size-6-mobile">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Tempore, eius?
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
									<FaGraduationCap size="1em" className="fa-fw" />
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Lorem ipsum</h3>
										<p className="is-size-5 is-size-6-mobile">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Tempore, eius?
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
									<FaBeer className="fa-fw" />
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Lorem ipsum</h3>
										<p className="is-size-5 is-size-6-mobile">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Tempore, eius?
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
									<FaLightbulb size="1em" className="fa-fw" />
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Lorem ipsum</h3>
										<p className="is-size-5 is-size-6-mobile">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Tempore, eius?
										</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
