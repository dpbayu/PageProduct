document.addEventListener('alpine:init', () => {
    Alpine.data('custom_select', () => ({
        products: ['Pink', 'Red', 'Orange', 'Maroon'],
        show: false,
        value: null
    }));
})
// Modal
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("disable-scroll")
    });
});
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("disable-scroll")
    });
});
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
        document.body.classList.remove("disable-scroll")
    }
};
// Modal

// Produk
var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
// Select Element
// console.log(incrementButton);
// console.log(decrementButton);
// INCREMENT
for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        // console.log(input)
        var inputValue = input.value;
        // console.log(inputValue)
        var newValue = parseInt(inputValue) + 1;
        // console.log(newValue)
        input.value = newValue;
    })
}
// DECREMENT
for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
        // console.log(input)
        var inputValue = input.value;
        // console.log(inputValue)
        var newValue = parseInt(inputValue) - 1;
        // console.log(newValue)
        if (newValue >= 0) {
            input.value = newValue;
        } else {
            input.value = 0;
        }
    })
}
// Produk

// Star
let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for (let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function () {
        i = this.value;
    });
}
// Star