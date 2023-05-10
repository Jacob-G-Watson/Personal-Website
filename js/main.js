// import cssDoodle from "css-doodle.min.js";

/**
 * Start executing code when window is ready
 */
window.onload = function () {
	Main();
};

/**
 * A clear start point to the functionality of this file
 *
 */
function Main() {
	if (
		window.location.pathname == "/Personal-Website/" ||
		window.location.pathname == "/Personal-Website/index.html"
	) {
		startTheMove();
	}
}

/**
 * Get a array of file names as strings
 *
 * @returns {string[]} An array of file name strings
 */
function getFileNames() {
	//todo dynamically read the file
	var fileNames = [
		`android-original-wordmark.svg`,
		`csharp-original.svg`,
		`css3-original-wordmark.svg`,
		`dot-net-original-wordmark.svg`,
		`git-scm-icon.svg`,
		`html5-original-wordmark.svg`,
		`java-original.svg`,
		`javascript-original.svg`,
		`microsoft-sql-server-logo.svg`,
		`nodejs-original-wordmark.svg`,
		`python-original.svg`,
		`react-original-wordmark.svg`,
		`typescript-original.svg`,
	];
	return fileNames;
}

/**
 * Get a filename of an icon
 *
 * @returns {string} A random file name from a hardcoded list of names
 */
function getFileName() {
	var fileNames = getFileNames();
	//todo this random goes through all of the files before selecting the same one twice
	var fileNameIndex = Math.floor(Math.random() * fileNames.length);
	return fileNames[fileNameIndex];
}

/**
 * Create the elements to be moved across the screen and trigger the move
 *
 */
async function startTheMove() {
	var widthOfIcon = 64;
	var parent = document.getElementsByClassName("devSlide")[0];

	for (let index = 0; index < innerWidth / widthOfIcon; index++) {
		const div = document.createElement("div");
		div.classList.add("square");
		parent.appendChild(div);
	}

	var elements = document.getElementsByClassName("square");

	for (let index = 0; index < elements.length; index++) {
		elements[index].style.backgroundImage = `url(./images/icons/${getFileName()})`;
		elements[index].style.left = 0 - index * widthOfIcon - 64 + "px";

		elements[index].style.top = `${Math.floor(Math.random() * 76) - 38}%`;

		myMove(elements[index], index * widthOfIcon + widthOfIcon);
		await new Promise((r) => setTimeout(r, 1000));
	}
}

/**
 * Move one element across the screen with a randomised image
 *
 * @param {HTMLElement} element
 * @param {number} offSetIconWidth
 */
async function myMove(element, offSetIconWidth) {
	element.classList.remove("transitionNone");

	await new Promise((r) => setTimeout(r, 100));
	element.style.left = innerWidth + "px";

	await new Promise((r) => setTimeout(r, 5000));

	//reset movement and hide icon
	element.classList.add("opacityNone");
	element.classList.add("transitionNone");
	element.style.backgroundImage = `url(../images/icons/${getFileName()})`;

	//setup for next run
	element.style.left = 0 - offSetIconWidth + "px";
	element.classList.remove("opacityNone");
	element.style.top = `${Math.floor(Math.random() * 76) - 38}%`;

	await new Promise((r) => setTimeout(r, 100));
	await myMove(element, offSetIconWidth);
}
