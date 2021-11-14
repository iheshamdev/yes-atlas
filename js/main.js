// const addresses = document.querySelectorAll(".address");
const togglers = document.querySelectorAll(".address__header");
togglers.forEach(itm => {
    itm.addEventListener('click', toggleAddresses);
});

function toggleAddresses(e) {
    // console.log()
    const address = e.target.closest('.address');
    address.classList.toggle('expand');
    
    // const content = e.target.closest('.address').querySelector('.address__content');
    // if (content.style.maxHeight){
    //     content.style.maxHeight = 0;
    //     content.style.padding = '0 3.2rem';
    // } else {
    //     console.log(content.scrollHeight)
    //     content.style.maxHeight = "500px";
    //     content.style.padding = '3.2rem';
    // }
    // if(address.classList.contains('expanded')){
    // }
    // if (content.style.maxHeight){
    //     content.style.maxHeight = null;
    //   } else {
    //     content.style.maxHeight = content.scrollHeight + "px";
    //   } 
}



// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
    // if (content.style.maxHeight){
    //   content.style.maxHeight = null;
    // } else {
    //   content.style.maxHeight = content.scrollHeight + "px";
    // } 
//   });
// }