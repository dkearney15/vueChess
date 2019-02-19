export default class Piece {
	constructor(HTML = null, color = null, value = 0, name = "empty") {
		this.HTML = HTML;
		this.color = color;
		this.name = name;
		this.value = value;
	}
}