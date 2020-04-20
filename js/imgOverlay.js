// Inspired by https://www.youtube.com/watch?v=uKVVSwXdLr0

const blur = document.createElement('div')
blur.id = 'BlurBox'
document.body.appendChild(blur)

blur.addEventListener('click', e => {
        if (e.target !== e.currentTarget) {
            return
        }
        blur.classList.remove('active')
    }
)

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', e => {
        blur.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (blur.firstChild) {
            blur.removeChild(blur.firstChild)
        }
        blur.appendChild(img)
  })
})