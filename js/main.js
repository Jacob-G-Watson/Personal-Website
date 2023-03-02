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

async function startTheMove() {
	var widthOfIcon = 64;
	var elements = document.getElementsByClassName("square");

	for (let index = 0; index < elements.length; index++) {
		myMove(elements[index], index * widthOfIcon, widthOfIcon);
		await new Promise((r) => setTimeout(r, 1000));
	}
}

function myMove(element, offSetIconWidth, widthOfIcon) {
	//todo could css be change to not require the adjustment, when in mobile view there are doubled up icons
	var topLocation = `${Math.floor(Math.random() * 81) - 40}%`;
	console.log(offSetIconWidth);
	var id = null;
	var pos = -innerWidth / 2 - offSetIconWidth;
	clearInterval(id);
	id = setInterval(frame, 1);

	element.style.top = topLocation;
	element.style.backgroundImage = `url(../images/icons/${getFileName()})`;

	function frame() {
		if (pos == innerWidth / 2 + offSetIconWidth) {
			clearInterval(id);
			myMove(element, offSetIconWidth, widthOfIcon);
		} else {
			pos++;
			element.style.left = pos + "px";
		}
	}
}
