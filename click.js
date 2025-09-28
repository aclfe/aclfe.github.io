document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');
    document.querySelectorAll('.click-to-view').forEach(card => {
        card.addEventListener('click', function () {
            const img = card.querySelector('img');
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalImg.src = '';
    });
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
});