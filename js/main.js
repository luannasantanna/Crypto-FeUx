function scrollHeader() {
    const nav =document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader)

// Newslettler

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});

const campo_email = document.querySelector('.campo-email');
const botao_subs = document.querySelector('.btn-subscribe');


document.querySelector('input').addEventListener('click', () => {
    campo_email.classList.add('subscribe-active');

    botao_subs.classList.add('btn-subscribe-active');
});

function removeSubs() {
    campo_email.classList.remove('subscribe-active');
    botao_subs.classList.remove('btn-subscribe-active');

    const inputEmail = document.querySelector('.email');

    inputEmail.value = [];
    console.log(inputEmail.value);
    console.log(campo_email)
};

botao_subs.addEventListener('click', removeSubs);



// FAQ

const accordion_item = document.querySelectorAll('.accordion-item');

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector('.accordion-header');

    accordion_header_item.addEventListener('click', () => {
        const accordion_content_item = item.querySelector('.accordion-content');

        const item_actived = document.querySelector('.active-faq');

        VerifyActive(item, accordion_content_item, item_actived);
    });
});

function VerifyActive(item, content, content_actived) {
    const icon_item = item.querySelector('.icon-faq')
    const icon_item_active = document.querySelectorAll('.icon-faq');

    icon_item_active.forEach((item) => (item.classList.add('icon-faq-down')));

    if (content_actived) {
        content_actived.style.height = 0;
        content_actived.classList.remove('active-faq');
        icon_item.classList.remove('icon-faq-up');
    }

    if (content !== content_actived) {
        icon_item.classList.add('icon-faq-up');
        content.classList.add('active-faq');
        content.style.height = content.scrollHeight + 48 + 'px';
    }
}