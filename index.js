let button = document.querySelector('.btn');
let input = document.querySelector('.input');




button.addEventListener('click' , e=>{

    let word = document.querySelector('.str').value.replace(/\s+/g, '');
    let count = word.length;
    let result = document.querySelector('.output');
    let output = 0;
    const timer = setInterval(() =>{
        result.innerHTML = `<h2>${output}</h2>`;
    if (output===count){
        clearInterval(timer);
    } else{
        output++;
    }
        
    },100);

    
        
    
});
   








