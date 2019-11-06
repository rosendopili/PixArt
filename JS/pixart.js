//Question 1 & 2//

function changeColor(event){
 event.preventDefault(); //no page refresh
 const inputColor = document.getElementById('color-field').value;
 document.querySelector('.brush').style.background = inputColor
}

document.getElementById('set-color').addEventListener('click', changeColor);

//Question 3,4,5,6//

for (let i = 0; i < 8000; i++) { //changed value of 20 to 8000
 let div = document.createElement('div');
 div.setAttribute('class', 'square');
 div.addEventListener('mouseover', canvas); //added event listener to 'canvas' allowing for pixel-color change on 'click.'
 //changed 'click' to 'mouseover'
 document.body.appendChild(div);
}

function canvas (event) {
 this.style.background = document.getElementById('color-field').value;
}
