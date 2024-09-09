<link rel="icon" href="/favicon.ico"><script type="text/javascript">
  window.P && P.when('A','ready').execute(function(A) {
    var $ = A.$;
    $('.feed-carousel').first().addClass('first-carousel');
    P.register('gw-first-carousel');
    if($('#desktop-ad-atf').height() === 0) {
      $('.gw-ad-row .a-fixed-right-grid-inner').css('padding-right','0px');
    }
  });

const imgs = document.querySelectorAll('.header-slider ul img ');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if (n < 0) {
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            item.scrollLeft += 100;
        } else {
            item.scrollLeft -= 100;
        }
    });
}
