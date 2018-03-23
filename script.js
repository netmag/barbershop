window.onload = main;

'use strict'

function main() {
	const qS = selector => document.querySelector(selector);
	const modalCloseMap = qS(".modal-close-map");
	const modalClose = qS(".modal-close");
	const modalMap = qS(".modal-map");
	const modalLogin = qS(".modal-login");
	const map = qS(".map");
	const loginLink = qS(".login-link");

	const visible = elem =>	elem.style.visibility = 'visible';
	const hidden = elem => elem.style.visibility = 'hidden';

	loginLink.onmouseup = () => visible(modalLogin);
	map.onmouseup = () => visible(modalMap);
	modalClose.onmouseup = () => hidden(modalLogin);
	modalCloseMap.onmouseup = () => hidden(modalMap);

};