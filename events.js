// let btn = document.querySelector('.clickMe');
// btn.addEventListener('click',()=>{
//     console.log("Button Clicked")
// })


// function fun(){
//     console.log("It also works")
// }


let list = document.querySelectorAll('li');

list.forEach((ele) => {
    ele.addEventListener('click',(e)=>{
        console.log(e.target.innerText);
        e.target.style.textDecoration = "line-through";
    })
});