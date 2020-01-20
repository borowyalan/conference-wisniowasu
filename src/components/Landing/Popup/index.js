import React from "react"

import "./popup.scss"

export default function index({ changePopupState }) {
	return (
		<div id="popup" className="box">
			<div className="title-container">
				<h3 className="title">Zobacz co możemy dać Twojej&nbsp;szkole.</h3>
			</div>
			<a className="close-button" onClick={() => changePopupState(false)}>
				x
			</a>
			<iframe
				id="ytplayer"
				type="text/html"
				src="https://www.youtube.com/embed/TIVrDtQWEqU?autoplay=0&origin=http://example.com"
				frameborder="0"
			></iframe>
		</div>
	)
}
