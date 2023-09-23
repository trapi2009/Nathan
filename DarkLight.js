function toggleDarkMode() {
	const darkModeToggle = document.getElementById("dark-mode");
	const container = document.querySelector(".toggle-container");
	if (darkModeToggle.checked) {
		document.body.classList.add("dark-mode");
		container.title = "Switch to Light Mode";
	} else {
		document.body.classList.remove("dark-mode");
		container.title = "Switch to Dark Mode";
	}
}

// Set initial mode based on system preference
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	const darkModeToggle = document.getElementById("dark-mode");
	darkModeToggle.checked = true;
	document.body.classList.add("dark-mode");
	document.querySelector(".toggle-container").title = "Switch to Light Mode";
}
