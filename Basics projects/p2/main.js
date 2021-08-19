const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

const getBGcolor = (selecetedElement) => {
    return window.getComputedStyle(selecetedElement).backgroundColor
}

var color = getBGcolor(pink)

// pink.addEventListener('click', () => {
//     center.style.background = color
// })

const colorchanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color
    })
}

colorchanger(red, getBGcolor(red))
colorchanger(cyan, getBGcolor(cyan))
colorchanger(violet, getBGcolor(violet))
colorchanger(orange, getBGcolor(orange))
colorchanger(pink, getBGcolor(pink))