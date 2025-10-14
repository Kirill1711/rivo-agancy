
//hover picteres Industry expertise
let imges = document.querySelectorAll('.left img');


const industryItems = document.querySelectorAll('.industry__item');

for (let item of industryItems) {
    item.addEventListener('mousemove', function () {
        for(let img of imges) {
            img.classList.remove('indastry__active');
            img.classList.add('indastry__unactive')
            if(item.dataset.index == img.dataset.index) {
                img.classList.add('indastry__active');
                img.classList.remove('indastry__unactive');
            }
        }
    })
}

//header menu open/close 

const openmenu = document.querySelector('.burger__open');
const closemenu = document.querySelector('.burger__close');
const blockmenu = document.querySelector('.burger__menu_block');
const menuinfo = document.querySelector('.burger__menu_info');
const menucontacts = document.querySelector('.burger__menu_contacts');
const menuitemA = document.querySelectorAll('.menu a');


console.log(window.screen.width);
function showhidmenu (btn)  {
    btn.addEventListener('click', function () {
        if(btn.classList.contains('burger__open') == true) {
            btn.style.display = 'none';
            btn.nextElementSibling.style.display = 'flex';
            blockmenu.style.display = 'flex';
            menuinfo.style.display = 'flex';
            menucontacts.style.display = 'flex';
            for (let item of menuitemA) {
                item.style.display = 'none';
            }
           
        } else {
            btn.style.display = 'none';
            btn.previousElementSibling.style.display = 'flex';
            blockmenu.style.display = 'none';
            menuinfo.style.display = 'none';
            menucontacts.style.display = 'none';
            if(window.screen.width > 768) {
              for (let item of menuitemA) {
                item.style.display = 'flex';
            } 
        }
           
        }
    })
}

showhidmenu(openmenu);
showhidmenu(closemenu);





//follower projects





//slider

document.addEventListener("DOMContentLoaded", () => {


 let swiper = new Swiper('.swiper-review', {

  loop: false,
  slidesPerView: 1,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  });

});


//back to top

document.querySelector('.back-to-top img').addEventListener('click', function() {
    scrollTo({
    behavior: 'smooth',
    top: 0,
});
});





