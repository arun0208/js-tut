// let btn = document.querySelector('.clickMe');
// btn.addEventListener('click',()=>{
//     console.log("Button Clicked")
// })


// function fun(){
//     console.log("It also works")
// }


let list = document.querySelectorAll('li');
let isStriked = false;

list.forEach((ele) => {
    ele.addEventListener('click',(e)=>{
        if(!isStriked){
            console.log(e.target.innerText);
        e.target.style.textDecoration = "line-through";
        isStriked = true;
        }
        else{
            e.target.style.textDecoration = "none";
            isStriked = false;
        }
    })

    ele.addEventListener('dblclick',(e)=>{
        e.target.remove();
    })
});