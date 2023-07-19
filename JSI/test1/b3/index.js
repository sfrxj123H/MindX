class rectangle {
	width;
	height;
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	findPerimeter() {
		window.alert((this.width + this.height) *2)
	}
	findArea() {
		window.alert(this.width * this.height)
	}
}