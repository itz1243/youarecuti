document.querySelector('.thank-you-button').addEventListener('click', function() {
    const message = document.getElementById('celebration-message');
    
    message.innerText = '🎉 Welcome! 🎉';
    message.style.opacity = '1';
    message.style.animation = 'welcomeAnimation 0.5s forwards';

    setTimeout(() => {
        message.classList.add('sparking');
    }, 500);

    setTimeout(() => {
        message.style.opacity = '0';
        message.classList.remove('sparking');
    }, 5000);
});
