let messSpan = document.querySelectorAll('.mess-with-me')
let images = document.querySelectorAll('img')
let butt = document.querySelector('#toggle')
let dinosaurRow = document.querySelector('#row')

messSpan[0].style.fontSize = '40px'
messSpan[1].style.backgroundColor = 'green'
// images[1].style.display = 'none'
images[1].hidden = true
images[0].style.width = '324px'

// messSpan[0].addEventListener('click', changeFontColor)

// function changeFontColor(){
//     messSpan[0].style.color = 'orange'
// }

// messSpan[0].addEventListener('click', function(){changeFontColor('orange')})

// function changeFontColor(color){
//     messSpan[0].style.color = color
// }

messSpan[0].addEventListener('click', () => {changeFontColor('orange')})

function changeFontColor(color){
    messSpan[0].style.color = color
}

images[0].addEventListener('click', changeBorderColor)

function changeBorderColor(){
    images[0].style.border = '1px solid red'
}

// butt.addEventListener('click', rowColor)

// function rowColor(){
//     if(dinosaurRow.style.backgroundColor === 'lightgreen'){
//         dinosaurRow.style.backgroundColor = 'white'
//     } else{
//         dinosaurRow.style.backgroundColor = 'lightgreen'
//     }
// }

let clicked = true
butt.addEventListener('click', () => {
    clicked = !clicked;
    let color = clicked ? 'white' : 'lightgreen'
    dinosaurRow.style.backgroundColor = color
})

images[2].addEventListener('mouseover', imgGrow)

images[2].addEventListener('mouseout', imgNormal)

function imgGrow(){
    images[2].style.width = '200px'
}

function imgNormal(){
    images[2].style.width = '162px'
}