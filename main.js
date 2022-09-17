var canvas, gl, vertexShaderCode, vertexShaderObject, fragmentShaderCode, fragmentShaderObject

function main() {
	/** @type {HTMLCanvasElement} */
	canvas = document.getElementById("canvas")
	gl = canvas.getContext("webgl")

	// Vertex Shader
	vertexShaderCode = `
	attribute vec2 aPosition;
	void main() {
		float x = aPosition.x;
		float y = aPosition.y;
		gl_PointSize = 5.0;
		gl_Position = vec4(x, y, 0.0, 1.0);
	}
	`
	vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(vertexShaderObject, vertexShaderCode)
	gl.compileShader(vertexShaderObject) // sampai sini jadi .o
	
	// Fragment Shader
	fragmentShaderCode = `
	precision mediump float;
	void main() {
		float r = 0.0;
		float g = 0.0;
		float b = 1.0;
		gl_FragColor = vec4(r, g, b, 1.0);
	}
	`
	fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
	gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
	gl.compileShader(fragmentShaderObject) // sampai sini jadi .o

	shaderProgram = gl.createProgram() // wadah dari .exe
	gl.attachShader(shaderProgram, vertexShaderObject)
	gl.attachShader(shaderProgram, fragmentShaderObject)
	gl.linkProgram(shaderProgram)
	gl.useProgram(shaderProgram)

	draw()
}

function draw() {
	gl.clearColor(1.0, 0.65, 0, 1.0)
	gl.clear(gl.COLOR_BUFFER_BIT)

	var number3Vertices = [
		// -0.9, 0.9,
		// -0.1, 0.9,
		// -0.1, 0.1,
		// -0.9, 0.1,

		-0.675, 0.7,	// A: ujung kiri atas
		-0.6, 0.765,
		-0.5, 0.8,		// B: tengah atas
		-0.4, 0.765,
		-0.325, 0.7,
		-0.325, 0.625,
		-0.35, 0.55,	// C
		-0.425, 0.5,
		-0.5, 0.5,		// D: tengah
		-0.425, 0.5,
		-0.35, 0.45,	// E
		-0.325, 0.375,
		-0.325, 0.3,
		-0.4, 0.235,
		-0.5, 0.2,		// F: tengah bawah
		-0.6, 0.235,
		-0.675, 0.3,	// G: ujung kiri bawah
	]

	var number6Vertices = [
		// 0.1, 0.9,
		// 0.9, 0.9,
		// 0.9, 0.1,
		// 0.1, 0.1,

		0.675, 0.65,// A: kanan atas
		0.61, 0.76,
		0.5, 0.8,		// B: tengah atas
		0.39, 0.76,
		0.325, 0.65,// C
		0.325, 0.35,// D: kiri bawah
		0.39, 0.25,
		0.5, 0.2,		// E: tengah bawah
		0.61, 0.25,
		0.675, 0.35,
		0.675, 0.45,// F
		0.61, 0.55,
		0.5, 0.6,		// G: tengah
		0.39, 0.55,
		0.325, 0.45,
	]

	var letterNVertices = [
		// -0.9, -0.1,
		// -0.1, -0.1,
		// -0.1, -0.9,
		// -0.9, -0.9,

		// -0.675, -0.8,	// A: ujung kiri bawah
		// -0.675, -0.2,	// B: ujung kiri atas
		// -0.325, -0.8,	// C: ujung kanan bawah
		// -0.325, -0.2,	// D: ujung kanan atas

		// left part
		-0.7, -0.8,
		-0.6, -0.8,
		-0.7, -0.2,
		-0.6, -0.2,
		-0.6, -0.8,
		-0.7, -0.2,
		
		// mid part
		-0.6, -0.2,
		-0.6, -0.4,
		-0.4, -0.8,
		-0.4, -0.8,
		-0.4, -0.6,
		-0.6, -0.2,
		
		// right part
		-0.4, -0.8,
		-0.3, -0.8,
		-0.4, -0.2,
		-0.3, -0.2,
		-0.3, -0.8,
		-0.4, -0.2,
	]

	var letterOVertices = [
		// 0.1, -0.1,
		// 0.9, -0.1,
		// 0.9, -0.9,
		// 0.1, -0.9,

		// 0.325, -0.8,	// A: ujung kiri bawah
		// 0.325, -0.2,	// B: ujung kiri atas
		// 0.5, -0.2,		// C: tengah atas
		// 0.675, -0.2,	// D: ujung kanan atas
		// 0.675, -0.8,	// E: ujung kanan bawah
		// 0.5, -0.8,		// F: tengah bawah
		
		// atas
		0.45, -0.2,
		0.55, -0.2,
		0.47, -0.3,		// inside
		0.55, -0.2,
		0.47, -0.3,
		0.53, -0.3,		// inside
		

		// kanan atas
		0.55, -0.2,
		0.53, -0.3,
		0.64, -0.275,	// outside anchor

		0.53, -0.3,
		0.64, -0.275,
		0.57, -0.35,	// inside anchor
		
		0.64, -0.275,
		0.57, -0.35,
		0.59, -0.42,
		
		0.64, -0.275,
		0.59, -0.42,
		0.675, -0.4,
		
		
		// kanan
		0.675, -0.4,
		0.675, -0.6,
		0.59, -0.42,	// inside
		0.675, -0.6,
		0.59, -0.42,
		0.59, -0.58,	// inside
		
		// kanan bawah
		0.675, -0.6,
		0.59, -0.58,
		0.64, -0.725,	// outside anchor

		0.59, -0.58,
		0.64, -0.725,
		0.57, -0.65,	// inside anchor
		
		0.64, -0.725,
		0.57, -0.65,
		0.53, -0.7,
		
		0.64, -0.725,
		0.53, -0.7,
		0.55, -0.8,
		
		
		// bawah
		0.55, -0.8,
		0.45, -0.8,
		0.47, -0.7,		// inside
		0.55, -0.8,
		0.47, -0.7,
		0.53, -0.7,		// inside
		
		// kiri bawah
		0.45, -0.8,
		0.47, -0.7,
		0.36, -0.725,	// outside anchor
		
		0.47, -0.7,
		0.36, -0.725,
		0.43, -0.65,	// inside anchor
		
		0.36, -0.725,
		0.43, -0.65,
		0.41, -0.58,

		0.36, -0.725,
		0.41, -0.58,
		0.325, -0.6,
		

		// kiri
		0.325, -0.6,
		0.325, -0.4,
		0.41, -0.42,	// inside
		0.325, -0.6,
		0.41, -0.42,
		0.41, -0.58,	// inside
		
		// kiri atas
		0.325, -0.4,
		0.41, -0.42,
		0.36, -0.275,	// outside anchor
		
		0.41, -0.42,
		0.36, -0.275,
		0.43, -0.35,	// inside anchor

		0.36, -0.275,
		0.43, -0.35,
		0.45, -0.2,
		
		0.43, -0.35,
		0.45, -0.2,
		0.47, -0.3,
	]

	drawA(gl.LINE_STRIP, number3Vertices)
	drawA(gl.LINE_STRIP, number6Vertices)
	drawA(gl.TRIANGLES, letterNVertices)
	drawA(gl.TRIANGLES, letterOVertices)
}

function drawA(type, vertices) {
	var n = initBuffers(vertices)
	if (n < 0) {
		console.log("Failed to set the positions of the vertices")
		return
	}

	gl.drawArrays(type, 0, n)
}

function initBuffers(vertices) {
	var n = vertices.length / 2

	var buffer = gl.createBuffer()
	if (!buffer) {
		console.log("Failed to create the buffer object")
		return -1
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

	// Mengajari GPU cara mengoleksi nilai posisi dari ARRAY_BUFFER untuk setiap verteks yang diproses
	var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
	if (aPosition < 0) {
		console.log("Failed to get the storage location of aPosition")
		return -1
	}

	gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
	gl.enableVertexAttribArray(aPosition)
	return n
}