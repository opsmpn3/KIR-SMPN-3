document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        // Tombol "Lihat KIR" untuk membuka modal PDF
        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfViewer = document.getElementById("pdf-viewer");
            pdfViewer.src = `pdfs/${room.replace(/\s/g, "_")}.pdf`;

            document.getElementById("pdf-modal").style.display = "flex";
        });
    }

    // Tombol Perawatan (Google Form - link sama untuk semua)
    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan"; // Ganti dengan link Google Form
    });

    // Tombol untuk menutup modal PDF
    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("pdf-modal").style.display = "none";
    });
});
