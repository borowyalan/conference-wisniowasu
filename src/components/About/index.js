import React from "react"

import "../../pages/mystyles.scss"
import "./about.css"

export default function About() {
	return (
		<section className="section" id="about">
			<div className="container">
				<h2 className={`title is- has-text-centered`}>About</h2>
				<div className="columns is-multiline">
					<div className="column is-half">
						<div className="box">
							<article className="media">
								<div className="media-left">
									<div className="icon">icon</div>
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Title</h3>
										<p className="is-size-5 is-size-6-mobile">subtitle</p>
									</div>
								</div>
							</article>
						</div>
					</div>
					<div className="column is-half">
						<div className="box">
							<article className="media">
								<div className="media-left">
									<div className="icon">icon</div>
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Title</h3>
										<p className="is-size-5 is-size-6-mobile">subtitle</p>
									</div>
								</div>
							</article>
						</div>
					</div>
					<div className="column is-half">
						<div className="box">
							<article className="media">
								<div className="media-left">
									<div className="icon">icon</div>
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">
											Title lorem lorem lorem
										</h3>
										<p className="is-size-5 is-size-6-mobile">
											subtitle lorem lorem lorem
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
									<div className="icon">icon</div>
								</div>
								<div className="media-content">
									<div className="content">
										<h3 className="title is-3 is-size-4-mobile">Title</h3>
										<p className="is-size-5 is-size-6-mobile">subtitle</p>
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
