const reset = document.getElementById('reset');
const clicker = document.getElementById('clicker');
const h1 = document.getElementById('h1');
let counter = 0;

clicker.addEventListener('click', (e)=>{
    e.preventDefault();
    counter = ++counter;
    h1.textContent = counter;    
    
})

reset.addEventListener('click', (e)=>{
    e.preventDefault();
    h1.textContent = 'Start clicking!';
    counter = 0;
})