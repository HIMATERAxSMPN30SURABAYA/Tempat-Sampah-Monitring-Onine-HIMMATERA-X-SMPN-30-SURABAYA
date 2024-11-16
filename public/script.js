const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33A1"];
const button = document.getElementById("colorButton");

// Fungsi untuk mengubah warna latar belakang secara acak
function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Mengubah warna latar belakang setiap 5 detik
setInterval(changeBackgroundColor, 5000);

// Event listener untuk mengubah warna latar belakang saat tombol diklik
button.addEventListener("click", changeBackgroundColor);

// Inisialisasi koneksi dengan server menggunakan socket.io
const socket = io();

// Mendengarkan event 'statusUpdate' dari server dan memperbarui tombol
socket.on('statusUpdate', (status) => {
    button.textContent = status; // Memperbarui teks tombol dengan status terbaru
    button.style.backgroundColor = status === 'Penuh' ? "#FF0000" : "#007BFF"; // Mengubah warna tombol berdasarkan status
});