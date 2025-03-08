document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        // Tombol "Lihat KIR" untuk membuka PDF fullscreen
        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfViewer = document.getElementById("pdf-viewer");
            pdfViewer.src = `pdfs/${room.replace(/\s/g, "_")}.pdf`;

            // Tampilkan PDF fullscreen
            document.getElementById("pdf-container").style.display = "block";
            document.body.style.overflow = "hidden"; // Mencegah scroll di background
        });
    }

    // Tombol Perawatan (Google Form - link sama untuk semua)
    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan"; // Ganti dengan link Google Form
    });

    // Klik di luar PDF untuk menutup tampilan fullscreen
    document.getElementById("pdf-container").addEventListener("click", function () {
        document.getElementById("pdf-container").style.display = "none";
        document.body.style.overflow = "auto"; // Kembalikan scroll saat modal ditutup
    });
});
