import React, { useState } from "react"

import sent_icon from "../../../images/sent.svg"
import "./formModal.scss"

export default function index({ isModalOpen, changeModalState }) {
	return (
		<div className={`modal ${isModalOpen ? "is-active" : ""}`}>
			<div
				className="modal-background"
				onClick={() => changeModalState(false)}
			></div>
			<div className="modal-content">
				<div className="box">
					<div className="left">
						<img src={sent_icon} alt="" />
					</div>
					<div className="right">
						<h2>Dziękujemy za wiadomosć.</h2>
						<p>Odezwiemy się wkrótce</p>
					</div>
				</div>
			</div>
			<div
				className="modal-close is-large"
				onClick={() => changeModalState(false)}
			></div>
		</div>
	)
}
