const btn = document.querySelector("button")
const resultList = document.querySelector("#resultPrints")

btn.addEventListener("click", () => {
    const msg = "I am awesome!"
    resultList.innerHTML = ''
    for(let i = 0; i < 10; i++) {
                let newLi = document.createElement('ul')
                newLi.innerText = `${i + 1}. ${msg}`
                resultList.appendChild(newLi)
    }
                

})