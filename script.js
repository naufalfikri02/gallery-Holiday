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
const lyricsContainer = document.getElementById('lyrics-container');
const lyricsText = document.getElementById('lyrics-text');



// Contoh lirik lagu (bisa diisi manual atau dinamis)
const lyrics = `
[Tulus - Monokrom]
Black and white photo sheets
Remembering the night again, I count the stars
When my eyes have trouble sleeping, mm-mm
Your voice makes me sleepy, mm-mm
Wherever you are
I send you my thanks
For the colors in my life and many beautiful memories
You paint me
We never know
How long we are given time
If I go first, don't forget me
This is a song for you, my expression of gratitude
Black and white monochrome sheets
I try to remember the colors in my life
I would not have known love
If not for your kind heart
`;

// Isi lirik lagu ke dalam elemen
lyricsText.textContent = lyrics;

// Tambahkan event listener untuk tombol play
playButton.addEventListener('click', () => {
    // Memutar musik
    audio.play();
    // Menyembunyikan tombol play dan menampilkan tombol stop
    playButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
    // Menampilkan lirik lagu
    lyricsContainer.style.display = 'block';
});

// Tambahkan event listener untuk tombol stop
stopButton.addEventListener('click', () => {
    // Menghentikan musik
    audio.pause();
    // Menyembunyikan tombol stop dan menampilkan tombol play
    stopButton.style.display = 'none';
    playButton.style.display = 'inline-block';
    // Menyembunyikan lirik lagu
    lyricsContainer.style.display = 'none';
});