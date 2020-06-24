const section = document.querySelector('section')

function createBubble () {
	const createElement = document.createElement('span')
	createElement.setAttribute('class', 'bubble')
	const size = 20 + (Math.random() * 60)
	let random = Math.floor(Math.random() * 360) + 1
	const randomSign = Math.floor(Math.random() * 10) + 1
	const rotation = randomSign > 5 ? random : random * -1
	console.log(rotation)
	createElement.setAttribute('style', `transform: rotate(${rotation}deg)`)


	createElement.style.width = `${size}px`
	createElement.style.height = `${size}px`
	createElement.style.left = `${Math.random() * window.innerWidth}px`
	section.appendChild(createElement)
	setTimeout(() => {
		createElement.remove()
	}, 4000)
}

setInterval(createBubble, 50)