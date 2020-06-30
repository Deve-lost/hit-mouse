const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const score = document.querySelector('.score')

let beforeTanah
let done
let countScore

// Get Bil Random
function randomBil(tanah) {
	const t = Math.floor(Math.random() * tanah.length)
	const tRandom = tanah[t]

	// Cancel angka yang sama
	if (tRandom == beforeTanah) {
		randomBil(tanah)
	}

	beforeTanah = tRandom
	return tRandom
}

function rTime(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function showMouse() {
	const tRandom = randomBil(tanah)
	const timeLimit = rTime(300, 1000)
	tRandom.classList.add('muncul')

	setTimeout(() => {
		tRandom.classList.remove('muncul')
		if (!done) {
			showMouse()
		}

	}, timeLimit)
}

function play() {
	done = false
	countScore = 0
	score.textContent = 0
	showMouse()
	setTimeout(() => {
		done = true
	}, 10000)
}

// Pukul Mouse
function pukul() {
	countScore++
	this.parentNode.classList.remove('muncul')
	score.textContent = countScore
}

tikus.forEach(t => {
	t.addEventListener('click', pukul)
})