function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector('#profile img');
 
    html.classList.toggle('light');
 
    if (html.classList.contains('light')) {
        img.src = './imagensda/daredondo.png';
    } else {
        img.src = './imagensda/daredondo.png';
    }
 }