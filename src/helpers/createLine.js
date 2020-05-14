export default function Line(borderColor, borderWidth) {

	const createLineElement = (x, y, length, angle) => {
		const line = document.createElement("div");
		const styles = `border: ${borderWidth || 1}px solid ${borderColor || '#000000'};
				   	width: ${length}px;
				   	height: 0px;
				   	-moz-transform: rotate(${angle}rad);
				   	-webkit-transform: rotate(${angle}rad);
				   	-o-transform: rotate(${angle}rad);
				   	-ms-transform: rotate(${angle}rad);
				   	position: absolute;
				   	top: ${y}px;
					left: ${x}px;`
					   
		line.setAttribute('style', styles);  
		return line;
	}

	const createLine = (x1, y1, x2, y2) => {
		const a = x1 - x2,
			b = y1 - y2,
			c = Math.sqrt(a * a + b * b);
	
		const sx = (x1 + x2) / 2,
			sy = (y1 + y2) / 2;
	
		const x = sx - c / 2,
			y = sy;
	
		const alpha = Math.PI - Math.atan2(-b, a);
	
		return createLineElement(x, y, c, alpha);
	}

	return createLine
}