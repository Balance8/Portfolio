
document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', sub);
let x = document.getElementById('Input');
let y = document.getElementById('final');
let result = [];


function getSum(total, num) {
    return total + num;
}
function render(item) {
    y.innerHTML = result.reduce(getSum);
}

function init() {
    y.innerText = 0;
    
}



function add() {
    let input = document.getElementById('Input');
    result.push(parseInt(input.value));
    console.log(result);
    render();
    
 
}

function sub() {
    let input = document.getElementById('Input');
    result.push(parseInt(input.value)*-1);
    console.log(result);
    render();

}
init();