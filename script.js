// Menambahkan event listener untuk gambar di galeri
document.querySelectorAll('.gallery-img').forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = image.src;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});


const audio = document.getElementById('background-music');
const playButton = document.getElementById('play-music-btn');
const stopButton = document.getElementById('stop-music-btn');

// Tambahkan event listener untuk tombol play
playButton.addEventListener('click', () => {
    // Memutar musik
    audio.play();
    // Menyembunyikan tombol play dan menampilkan tombol stop
    playButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
});

// Tambahkan event listener untuk tombol stop
stopButton.addEventListener('click', () => {
    // Menghentikan musik
    audio.pause();
    // Menyembunyikan tombol stop dan menampilkan tombol play
    stopButton.style.display = 'none';
    playButton.style.display = 'inline-block';
});