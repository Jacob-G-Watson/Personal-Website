// import cssDoodle from "css-doodle.min.js";

window.onload = function () {
	Main();
};

function Main() {
	startTheMove();
}

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
		myMove(elements[index], index * widthOfIcon + widthOfIcon, widthOfIcon);
		await new Promise((r) => setTimeout(r, 400));
	}
}

/**
 * Move one element across the screen with a randomised image
 *
 * @param {HTMLElement} element
 * @param {number} offSetIconWidth
 * @param {number} widthOfIcon
 */
function myMove(element, offSetIconWidth, widthOfIcon) {
	var topLocation = `${Math.floor(Math.random() * 76) - 38}%`;
	var id = null;
	var pos = 0 - offSetIconWidth;
	clearInterval(id);
	id = setInterval(frame, 1);

	element.style.top = topLocation;
	element.style.backgroundImage = `url(../images/icons/${getFileName()})`;

	function frame() {
		if (pos > innerWidth) {
			clearInterval(id);
			myMove(element, offSetIconWidth, widthOfIcon);
		} else {
			pos++;
			element.style.left = pos + "px";
		}
	}
}
