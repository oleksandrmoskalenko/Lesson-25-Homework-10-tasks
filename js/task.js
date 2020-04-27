"use strict"

let $btn1 = document.createElement('button'),
    $btn2 = document.createElement('button'),
    $btn3 = document.createElement('button'),
    $btn4 = document.createElement('button'),
    $btn5 = document.createElement('button'),
    $btn6 = document.createElement('button'),
    $btn7 = document.createElement('button'),
    $btn8 = document.createElement('button'),
    $btn9 = document.createElement('button'),
    $btn10 = document.createElement('button')
$btn1.innerText = 'Task 1', $btn2.innerText = 'Task 2', $btn3.innerText = 'Task 3', $btn4.innerText = 'Task 4', $btn5.innerText = 'Task 5', $btn6.innerText = 'Task 6', $btn7.innerText = 'Task 7', $btn8.innerText = 'Task 8', $btn9.innerText = 'Task 9', $btn10.innerText = 'Task 10'
$btn1.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn2.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn3.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn4.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn5.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn6.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn7.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn8.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn9.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn10.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
document.body.append($btn1, $btn2, $btn3, $btn4, $btn5, $btn6, $btn7, $btn8, $btn9, $btn10)

//Task 1
$btn1.addEventListener('click', () => {
    let num1 = prompt('Write the 1st number', '')
    let num2 = prompt('Write the 2nd number', '')
    alert(`The result is ${maximaNum(num1, num2)}`)
})

//Task 2
$btn2.addEventListener('click', () => {
    let num = prompt('Write the number', '')
    alert(`${num}! = ${factorial(num)}`)
})

//Task 3
$btn3.addEventListener('click', () => {
    let dig1 = prompt('Write the 1st digit', '')
    let dig2 = prompt('Write the 2nd digit', '')
    let dig3 = prompt('Write the 3rd digit', '')
    alert(`The unified number is ${singleNum(dig1, dig2, dig3)}`)
})

//Task 4
$btn4.addEventListener('click', () => {
    let a = prompt('Write the length', '')
    let b = prompt('Write the height', '')
    alert(`The square is ${sqrRec(a, b)}`)
})

//Task 5
$btn5.addEventListener('click', () => {
    let num = prompt('Write the number', '')
    alert(perfectNum(num))
})

//Task 6
$btn6.addEventListener('click', () => { })

//Task 7
$btn7.addEventListener('click', () => { })

//Task 8
$btn8.addEventListener('click', () => { })

//Task 9
$btn9.addEventListener('click', () => { })

//Task 10
$btn10.addEventListener('click', () => { })

function factorial(n) {
    if (n == 0) return 1
    else return n * factorial(n - 1)
}

function singleNum(a, b, c) {
    return String(a) + String(b) + String(c)
}

function maximaNum(a, b) {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
}

function sqrRec(a, b) {
    if (b == '') b = a
    else if (a == '') a = b
    return a * b
}

function perfectNum(number) {
    let divisors = 0
    for (let i = 1; i <= Math.round(number / 2); i++)
        if (!(number % i)) divisors += i
    if (number == divisors) return "The number is perfect"
    return "The number is not perfect"
}
