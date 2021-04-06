window.addEventListener('DOMContentLoaded', () => {
    //ПЛАВНАЯ прокрутка МЕНЮ
    //Найти все ссылки начинающиеся на #
    const anchors = document.querySelectorAll('a[href^="#"]');

    // Цикл по всем ссылкам
    for (const anchor of anchors) {
        anchor.addEventListener("click", e => {
            e.preventDefault(); // Предотвратить стандартное поведение ссылок
            // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
            // Плавная прокрутка до элемента с id = href у ссылки
            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    //измеенение ЦВЕТА меню при прокрутке
    let scrolled;
    let docWidth;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        docWidth = document.documentElement.clientWidth;
        if (scrolled > 0) {
            const nav = document.querySelector(".navbar");
            const wraphum = document.querySelector(".wraphum");
            nav.style.background = '#2F3340';
            nav.style.marginTop = "0";
            wraphum.style.backgroundColor = '#153450';
        }
        if (580 > scrolled) {
            const nav = document.querySelector(".navbar");
            const wraphum = document.querySelector(".wraphum");
            nav.style.background = "none";
            nav.style.marginTop = "1.5%";
            wraphum.style.backgroundColor = 'unset';
        }
        if (docWidth < 635) {
            const nav = document.querySelector(".navbar");
            nav.style.background = '#2F3340';
            //nav.style.marginTop = "0";
        }
    };

    //ГАМБУРГЕР меню выезд
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');
    hamburger.onclick = function() {
        nav.classList.toggle('navbar-active');
    };

    //ИНПУТ изменяемый по высоте
    const textareaHeight = document.getElementById("text");
    textareaHeight.addEventListener("input", event => {
        textareaHeight.style.height = 0;
        textareaHeight.style.height = textareaHeight.scrollHeight + "px";
    });


});
