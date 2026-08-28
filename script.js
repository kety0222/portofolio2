// Menu mobile
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Tutup menu setelah memilih link
const menuLinks = document.querySelectorAll("#navMenu a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// Pesan saat halaman selesai dibuka
console.log("Portfolio Deka berhasil dijalankan!");
