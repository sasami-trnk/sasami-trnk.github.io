// ナビゲーションバー固定
let nav = document.getElementById('nav-bar');
let rect = nav.getBoundingClientRect();
let navTop = rect.top + window.pageYOffset;

window.addEventListener('scroll', () => {
    if(window.scrollY > navTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});