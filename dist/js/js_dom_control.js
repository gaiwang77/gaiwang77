let uid = document.querySelector('#uid');


uid.addEventListener('click', () => {
    if (uid.classList.contains('active')) {
        uid.classList.remove('active');
    } else {
        uid.classList.add('active');
    }
});

