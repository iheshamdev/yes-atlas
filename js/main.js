// toggle addresses panels
const togglers = document.querySelectorAll(".address__header");
togglers.forEach(itm => {
    itm.addEventListener('click', (e) => {
        e.target.closest('.address').toggle('expand');
    });
});