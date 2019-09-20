// ### Problem 1:
//  Put the number 0 in your title. If you click the #1 button the title should change to "1" and the background to blue. If you click the #2 button the title should change to "2" and the background to red. Use classlist to change the background.

let but1 =document.getElementById("button1");
let but2=document.getElementById("button2");
let headNum=document.querySelector('p');
let headEvent = document.querySelector('header');

but1.addEventListener('click', function () {
    headNum.innerText='1';
    headEvent.classList.toggle('blueBackground')
});
but2.addEventListener('click', function () {
    headNum.innerText='2';
    headEvent.classList.toggle('redBackground')
});