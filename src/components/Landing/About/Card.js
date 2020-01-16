import React from "react"

export default function Card(props) {
	return (
		<div className="box">
			<article className="media">
				<div className="media-left">
					<img src={props.icon} alt="" srcset="" />
				</div>
				<div className="media-content">
					<div className="content">
						<h3 className="title is-3 is-size-4-mobile">
							{props.title}
						</h3>
						<p className="is-size-5 is-size-6-mobile">
							{props.children}
						</p>
					</div>
				</div>
			</article>
		</div>
	)
}
