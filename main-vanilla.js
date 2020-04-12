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

// スムーススクロール
const links = document.querySelectorAll('a');

for(let i=0; i < links.length; i++){
    href = links[i].getAttribute('href').replace('#', '');
    let content = document.getElementById(href);

    links[i].addEventListener('click', (e) => {
        let rect = content.getBoundingClientRect();
        contentTop = rect.top + window.pageYOffset - 50;

        console.log(contentTop);

        e.preventDefault();

        window.scroll({
            top: contentTop,
            behavior: 'smooth'
        });
    });
}