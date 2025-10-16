// Inisialisasi variabel hitungan
let clickCount = 0;

// Ambil elemen-elemen dari DOM
const layarPenghitung = document.getElementById('layar-penghitung');
const countDisplay = document.getElementById('count');
const resetButton = document.getElementById('reset-button');

// Fungsi untuk menambah hitungan
function incrementCounter() {
    clickCount++;
    countDisplay.textContent = clickCount;

    // Tambahkan kelas 'pop' untuk animasi singkat
    countDisplay.classList.add('pop');
    // Hapus kelas 'pop' setelah animasi selesai
    setTimeout(() => {
        countDisplay.classList.remove('pop');
    }, 100); // Durasi harus sesuai dengan transisi di CSS
}

// Event Listener untuk menghitung ketukan pada seluruh area body
layarPenghitung.addEventListener('click', function(event) {
    // Pastikan klik tidak berasal dari tombol "Atur Ulang" atau gambar Miku
    // Kita cek apakah target klik BUKAN bagian dari elemen dengan ID 'reset-button'
    // dan BUKAN juga gambar miku
    if (event.target.id !== 'reset-button' && !event.target.classList.contains('miku-chibi-icon')) {
        incrementCounter();
    }
});

// Event Listener untuk tombol Atur Ulang
resetButton.addEventListener('click', function() {
    clickCount = 0;
    countDisplay.textContent = clickCount;
    // alert('Hitungan Miku telah diatur ulang menjadi 0.'); // Bisa pakai alert atau notifikasi lain
    // Opsional: berikan feedback visual lain
    resetButton.textContent = 'Berhasil Diatur Ulang!';
    setTimeout(() => {
        resetButton.textContent = 'Atur Ulang';
    }, 1500);
});

// Anda bisa menambahkan suara ketukan jika ingin lebih interaktif lagi!
// const clickSound = new Audio('path/to/miku_sound.mp3'); // Ganti dengan path audio Anda
// layarPenghitung.addEventListener('click', function(event) {
//     if (event.target.id !== 'reset-button' && !event.target.classList.contains('miku-chibi-icon')) {
//         incrementCounter();
//         clickSound.play(); // Mainkan suara saat diklik
//     }
// });