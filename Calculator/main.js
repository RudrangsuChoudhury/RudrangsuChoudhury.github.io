let a = document.querySelector("h1")
let value1 = document.querySelectorAll(".digit")
value1.forEach((value) => {
    value.addEventListener("click", () => {
        if (a.innerText == "0") {
            a.innerText = value.innerText
        }
        else {
            a.innerText += value.innerText
        }
    })
})
let c = document.querySelector(".C")
c.addEventListener("click", () => {
    a.innerText = "0"
})
let d = document.querySelector(".D")
d.addEventListener("click", () => {
    if (a.innerText.length == 1) {
        a.innerText = "0"
    }
    else {
        a.innerText = a.innerText.slice(0, -1)
    }

})

let operator = document.querySelectorAll(".operator")
operator.forEach((value) => {
    value.addEventListener("click", () => {
        if (a.innerText[a.innerText.length - 1] == "+" || a.innerText[a.innerText.length - 1] == "-" || a.innerText[a.innerText.length - 1] == "*" || a.innerText[a.innerText.length - 1] == "/") {
            console.log( a.innerText.slice(0, -1))
            a.innerText = a.innerText.slice(0, -1) + value.innerText
        }
        else {
            a.innerText += value.innerText
        }
    })
})
let e = document.querySelector(".E")
e.addEventListener("click", () => {
        console.log(a.innerText)
        a.innerText = eval(a.innerText.slice(0, -1))
})
