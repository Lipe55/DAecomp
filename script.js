function toggleMode() {
    const html = document.documentElement;
    const profileImg = document.querySelector('#profile img');
    const voleiImages = document.querySelectorAll('ul li a img.volei');
    const moletomImg = document.querySelector('ul li a img.moletom');
    const tenisImg = document.querySelector('ul li a img.tenis');

    html.classList.toggle('light');

    if (html.classList.contains('light')) {
        profileImg.src = './imagensda/daredondo.png';
        voleiImages.forEach(img => {
            img.src = './imagensda/volei-preto.png';
        });
        moletomImg.src = './imagensda/moletom-preto.png';
        tenisImg.src = './imagensda/tenis-preto.png';
    } else {
        profileImg.src = './imagensda/daredondo.png';
        voleiImages.forEach(img => {
            img.src = './imagensda/volei-branco.png';
        });
        moletomImg.src = './imagensda/moletom-branco.png';
        tenisImg.src = './imagensda/tenis-branco.png';
    }
}

window.onload = function() {
    toggleMode();
    }

