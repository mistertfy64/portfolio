let mysteryTextIteration = 0;
const mysteryTextCharacterCounts = [
	9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3,
	3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 7, 7, 7, 7, 7, 7,
	9, 9, 9, 9, 9, 9, 11, 11, 11, 11, 11,
];
const mysteryTextCharacters =
	"1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./+_|";

const mysteryText = document.getElementById("text--mystery");
const mysteryTextLoop = setInterval(function () {
	function generateMysteryText(iteration) {
		let text = "";
		const allowedDistance = mysteryTextCharacterCounts[iteration];
		for (let character = 1; character <= 11; character++) {
			if (Math.abs(6 - character) < allowedDistance) {
				text +=
					mysteryTextCharacters[
						Math.floor(mysteryTextCharacters.length * Math.random())
					];
			} else {
				text += "&nbsp;";
			}
		}
		return text;
	}

	mysteryTextIteration++;
	if (mysteryTextIteration >= 20 && mysteryTextIteration <= 30) {
		mysteryText.innerHTML =
			"&nbsp;&nbsp;&nbsp;&nbsp;got&nbsp;&nbsp;&nbsp;&nbsp;";
	} else if (mysteryTextIteration >= 50 && mysteryTextIteration <= 60) {
		mysteryText.innerHTML = "did not get";
	} else {
		mysteryText.innerHTML = generateMysteryText(mysteryTextIteration);
	}
	if (mysteryTextIteration >= 60) {
		mysteryTextIteration = 0;
	}
}, 100);
