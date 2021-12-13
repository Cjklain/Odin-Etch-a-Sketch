const containerDiv = document.createElement('div');
const resetButton = document.querySelector('.reset');

function makeBoard(){
    containerDiv.classList.add('container');
    
    for(let i=0; i<16*16; i++){
        let boardDiv = document.createElement('div');
        boardDiv.classList.add('board')
        boardDiv.innerText = ''
        containerDiv.appendChild(boardDiv)
    }
    document.body.appendChild(containerDiv)
}

makeBoard();

containerDiv.addEventListener('mousemove',function(e){
    // change color when hover
    e.target.style.background = '#FFD523'; 
})


resetButton.addEventListener('click',function(){
    const boardDivs = document.querySelectorAll('.board')
    boardDivs.forEach(div=> div.style.background = 'goldenrod')
});