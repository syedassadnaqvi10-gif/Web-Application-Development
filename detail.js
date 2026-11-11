const sizes = document.querySelectorAll('.all_sizes')[0];

sizes.addEventListener('click', (e) => {
    if (sizes.contains(e.target) && e.target !== sizes) {
        const children = sizes.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
});

const minus = document.getElementById('quantity__minus');
const plus = document.getElementById('quantity__plus');

minus.addEventListener('click', (e) => {
    const quantity = document.querySelectorAll('.quantity__value')[0];
    const value = parseInt(quantity.innerText);
    if (value !== 1) {
        quantity.innerText = value - 1;
        const sub = document.querySelectorAll('.sub__value')[0];
        const total = parseInt(sub.innerText);
        sub.innerText = total - 2900;
    }
});

plus.addEventListener('click', (e) => {
    const quantity = document.querySelectorAll('.quantity__value')[0];
    const value = parseInt(quantity.innerText);
    if (value !== 15) {
        quantity.innerText = value + 1;
        const sub = document.querySelectorAll('.sub__value')[0];
        const total = parseInt(sub.innerText);
        sub.innerText = total + 2900;
    }
});