const colors = document.querySelectorAll(".color div");
console.log('colors: ', colors);
const shoes = document.querySelector('.shoeImage>img ');
console.log('shoes: ', shoes);
const submit = document.querySelector('div.submit');
console.log('submit: ', submit);
const select = document.querySelector('select');
console.log('select: ', select);
let sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];
let array = '';
//*************************************** */
// for (const size of sizes) {
//     let x = `<option>${size}</option>`;
//     array += x;

// }
// console.log('array: ', array);
// select.innerHTML = array;
// sizes.forEach((size) => {
//     let option = document.createElement('option');
//     option.textContent = `${size}`;
//     select.appendChild(option);
// });
//***************************************
sizes.forEach((size) => {
    select.add(new Option(size));
});


colors.forEach((item, index) => {
    // item.style.background = "red";
    item.style.background = item.getAttribute('data-color');

    item.addEventListener("click", (event) => {

        colors.forEach((item_2) => {
            item_2.style.border = "none";
            item_2.style.transform = "none";

        });

        item.style.border = "3px solid ";
        item.style.transform = "scale(1.25)";
        let color = event.target.getAttribute('data-color');
        console.log(color);
        submit.style.transform = "scale(1.1)";
        submit.style.border = "1px solid ";
        submit.style.background = `${color}`;

        console.log('submit: ', submit);
        shoes.style.animation = "anim-1 1s ease-in-out";
        shoes.addEventListener("animationend", () => {
            shoes.style.animation = "";
            shoes.style.animation = "anim-2 1s ease-in-out";
            shoes.src = "./image/" + item.getAttribute('data-color') + ".jpg";
        });



        console.log('shoes: ', shoes);
    });

});




//element.animate([{keyframes O%},{keyframes 100%}],{options});

/*document.getElementById("tunnel").animate([
    // keyframes
    {
        transform: 'translateY(0px)'
    },
    {
        transform: 'translateY(-300px)'
    }], {
    // timing options
    duration: 1000,
    iterations: Infinity
});*/