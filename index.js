function onDOMContentLoaded() {
	$("#about-team").fadeIn(1000);
	setTimeout(() => {
		$("#highlights").fadeIn(1500);
	}, 1000);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
