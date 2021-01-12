// const text = document.getElementByClassName("about-right")
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";
// for (let i = 0; 1 < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
// console.log(splitText)
// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('sapn')[char];
//     span.classList.add('fade');
//     char++;
//     if(char === splitText.length){
//         complete();
//         return;
//     };
// };

// function complete() {
//     clearInterval(timer);
//     timer = null;
// };

// if ($('.fadeInRight').length) {
//     var typed_strings = $(".fadeInRight").data('typed-items');
//     typed_strings = typed_strings.split(',')
//     new Typed('.fadeInRight', {
//       strings: typed_strings,
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 50,
//       backDelay: 2000
//     });
//   }
let images = ["steven at dstv.jpg",'steven suit.jpg'];
let input = document.getElementById('img-input');
let button = document.getElementById("btn")
let step = 1;

function slide() {
    document.images.slide.src=images[step];
    if (step < 1) 
    step++
    else 
   step = 0;
    
    setTimeout(slide,2500);
    
}

slide()
