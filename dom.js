// console.log(document.URL); //output -> http://127.0.0.1:5500/index.html

//querySelector vs querySelectorAll
//querySelector selects only the first matching element

// let result = document.querySelector('h1');
// console.log(result); //It will return null if javascript is declared above document so it is advisable to decalre javascript at the bottom
//sometimes it returns only html and sometimes with all property value it is completely normal
//we can select also classes(by using .) and id (by using #) and these selectors preferred over any other


//Some more methods
// getElementsByTagName('p');
// getElementsByClassName('classname')
// getElementById('idname')




//innerText vs innerHTML

//inner text returns only the text inside the selected element
//innerHTML returns the complete HTML code inside the selected tag


// let text = document.querySelector('h1');

// console.log(text.innerText);

// text.innerText = "You will be on TOP of The World !"
// console.log(text.innerText);



// let link = document.querySelector('a');

// link.setAttribute('href',"https://www.youtube.com/watch?v=6l8RWV8D-Yo&t=3850s");
// link.innerText = "React MasterClass";

//get methods are used to read properties but set methods are used to modify or overwrite the values



//We can also add styling to webpages using javascript

// let text = document.querySelector('h1');
// text.style.color = "Red";


//We can also add or remove css classes 

// let element = document.querySelector('h2');
// element.classList.add('green');
// console.log(element.classList)

// element.classList.remove('green');

//There are many DOM methods such as parent child and sibling