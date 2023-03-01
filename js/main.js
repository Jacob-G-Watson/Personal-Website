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
	var fileNameIndex = Math.floor(Math.random() * fileNames.length);
	return fileNames[fileNameIndex];
}

function startTheMove() {
	var elements = document.getElementsByClassName("square");
	for (let index = 0; index < elements.length; index++) {
		myMove(elements[index]);
	}
}

function myMove(element) {
	var widthOfIcon = 64;
	var topLocation = `${Math.floor(Math.random() * 81) - 40}%`;

	var id = null;
	var pos = -innerWidth / 2 - widthOfIcon;
	clearInterval(id);
	id = setInterval(frame, 1);

	element.style.top = topLocation;
	element.style.backgroundImage = `url(../images/icons/${getFileName()})`;

	function frame() {
		if (pos == innerWidth / 2 + widthOfIcon) {
			clearInterval(id);
			myMove(element);
		} else {
			pos++;
			element.style.left = pos + "px";
		}
	}
}
