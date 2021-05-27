document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
    if (!entry.classList.contains('active1')) {
        document.querySelector('.feedback li.active1').classList.remove('active1');
        entry.classList.add('active1');
    }
    e.preventDefault();
}));