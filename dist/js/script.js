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

let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');

addBtn.addEventListener('click', () => {
    qty.value = parseInt(qty.value) + 1;
});
subBtn.addEventListener('click', () => {
    if (qty.value <= 0) {
        qty.value = 0;
    } else {
        qty.value = parseInt(qty.value) - 1;
    }
});