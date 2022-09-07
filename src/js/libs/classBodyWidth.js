const body = document.querySelector('body')
const media = body.clientWidth

export function classBodyMedia() {

    if (media <= 480) {
        body.classList.add('__mobile')
    }

    if (media > 480 && media < 1024) {
        body.classList.add('__tablet')
    }

    if (media >= 1024) {
        body.classList.add('__pc')
    }
}

classBodyMedia()