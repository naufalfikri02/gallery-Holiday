// Menambahkan event listener untuk gambar di galeri
document.querySelectorAll('.gallery-img').forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = image.src;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});