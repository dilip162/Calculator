const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const dbzero = document.querySelector('.dbzero')

const display = document.querySelector('.display')

const ac = document.querySelector('.ac')
const de = document.querySelector('.de')
const dot = document.querySelector('.dot')

const modul = document.querySelector('.modul')
const multi = document.querySelector('.multi')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

const equalsto = document.querySelector('.equalsto')


const arr = [one, two, three, four, five, six, seven, eight, nine, zero, dbzero, multi, dot, modul, minus, plus]

for (const ar of arr) {

    ar.addEventListener('click', (e) => {
        const num = e.target.value
        display.value += num
        console.log(ar)
    })

}

equalsto.addEventListener('click', () => {
    display.value = eval(display.value)
})

ac.addEventListener('click', () => {
    display.value = ''
})

de.addEventListener('click', () => {
    display.value = display.value.slice(0, -1)
})



