//console.log( document )

// 1. accessing element
// let paragraphs = document.querySelectorAll('.paragraph') 
//console.log(paragraphs)



// let heading = document.getElementById('title1')
// let paragraphs1 = document.getElementsByClassName('paragraph')
// console.log(paragraphs1)

// 2. modifying elements

// let heading = document.querySelector('#title1') 
// heading.style.color = 'red';
// heading.innerHTML = 'hello';
// heading.innerText = 'Hey'
// console.log('innerHTML', heading.innerHTML)
// console.log('innerText', heading.innerText)

// let div = document.querySelector('div')
// div.setAttribute('id', 'mytitle')

// div.classList.remove('myInputs')

// paragraphs.forEach((singlePara) => {
//     console.log(singlePara)
// })



// 3. handling events

// let button = document.querySelector('button')
// button.addEventListener('click', (evt) => {
//     console.log(evt)
//     let inp1 = document.querySelector('input[type="number"]')
//     let inp2 = document.querySelector('input[type="text"]')
//     console.log(inp1.value)
//     console.log(inp2.value)

//     let products = document.querySelector('.products')

//     // creating elements
//     let p = document.createElement('p')
//     p.innerText = `${inp2.value} is $${inp1.value}`

//     // adding elements in DOM
//     products.appendChild(p)
// })

let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let inp1 = document.querySelector('input[type="number"]')
    let inp2 = document.querySelector('input[type="text"]')
    console.log(inp1.value)
    console.log(inp2.value)

    let products = document.querySelector('.products')

    // creating elements
    let p = document.createElement('p')
    p.innerText = `${inp2.value} is $${inp1.value}`

    // adding elements in DOM
    products.appendChild(p)
    inp1.value ='';
    inp2.value = '';
})