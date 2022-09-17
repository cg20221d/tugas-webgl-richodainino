function main() {
	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById("canvas")
	const gl = canvas.getContext("webgl")

	// drawNumber3(gl)
	drawNumber6(gl)
}

function drawNumber3(gl) {
	var vertices = [
		-0.9, 0.9,
		-0.1, 0.9,
		-0.1, 0.1,
		-0.9, 0.1,

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

	var isPoint = 1
	var points = vertices.length / 2

	var buffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

	// Vertex Shader
	var vertexShaderCode = `
	attribute vec2 aPosition;
	void main() {
		float x = aPosition.x;
		float y = aPosition.y;
		gl_PointSize = 10.0;
		gl_Position = vec4(x, y, 0.0, 1.0);
	}
	`
	const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(vertexShaderObject, vertexShaderCode)
	gl.compileShader(vertexShaderObject) // sampai sini jadi .o
	
	// Fragment Shader
	var fragmentShaderCode = `
	precision mediump float;
	void main() {
		float r = 0.0;
		float g = 0.0;
		float b = 1.0;
		gl_FragColor = vec4(r, g, b, 1.0);
	}
	`
	const fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
	gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
	gl.compileShader(fragmentShaderObject) // sampai sini jadi .o

	var shaderProgram = gl.createProgram() // wadah dari .exe
	gl.attachShader(shaderProgram, vertexShaderObject)
	gl.attachShader(shaderProgram, fragmentShaderObject)
	gl.linkProgram(shaderProgram)
	gl.useProgram(shaderProgram)

	// Mengajari GPU cara mengoleksi nilai posisi dari ARRAY_BUFFER untuk setiap verteks yang diproses
	var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
	gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
	gl.enableVertexAttribArray(aPosition)

	gl.clearColor(1.0, 0.65, 0, 1.0)

	gl.clear(gl.COLOR_BUFFER_BIT)

	gl.drawArrays(isPoint ? gl.POINTS : gl.LINE_STRIP, 0, points)
}

function drawNumber6(gl) {
	var vertices = [
		// 0.1, 0.9,
		// 0.9, 0.9,
		// 0.9, 0.1,
		// 0.1, 0.1,

		0.325, 0.7,	// A: ujung kiri atas
		0.5, 0.8,		// B: tengah atas
		0.675, 0.7,	// C
		0.5, 0.5,		// D: tengah
		0.675, 0.3,	// E
		0.5, 0.2,		// F: tengah bawah
		0.325, 0.3,	// G: ujung kiri bawah
	]

	var isPoint = 1
	var points = vertices.length / 2

	var buffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

	// Vertex Shader
	var vertexShaderCode = `
	attribute vec2 aPosition;
	void main() {
		float x = aPosition.x;
		float y = aPosition.y;
		gl_PointSize = 10.0;
		gl_Position = vec4(x, y, 0.0, 1.0);
	}
	`
	const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
	gl.shaderSource(vertexShaderObject, vertexShaderCode)
	gl.compileShader(vertexShaderObject) // sampai sini jadi .o
	
	// Fragment Shader
	var fragmentShaderCode = `
	precision mediump float;
	void main() {
		float r = 0.0;
		float g = 0.0;
		float b = 1.0;
		gl_FragColor = vec4(r, g, b, 1.0);
	}
	`
	const fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
	gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
	gl.compileShader(fragmentShaderObject) // sampai sini jadi .o

	var shaderProgram = gl.createProgram() // wadah dari .exe
	gl.attachShader(shaderProgram, vertexShaderObject)
	gl.attachShader(shaderProgram, fragmentShaderObject)
	gl.linkProgram(shaderProgram)
	gl.useProgram(shaderProgram)

	// Mengajari GPU cara mengoleksi nilai posisi dari ARRAY_BUFFER untuk setiap verteks yang diproses
	var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
	gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
	gl.enableVertexAttribArray(aPosition)

	gl.clearColor(1.0, 0.65, 0, 1.0)

	gl.clear(gl.COLOR_BUFFER_BIT)

	gl.drawArrays(isPoint ? gl.POINTS : gl.LINE_STRIP, 0, points)
}