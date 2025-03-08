document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        // Pastikan tombol "Lihat KIR" membuka PDF di tab baru dengan link yang benar
        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfUrl = `https://opsmpn3.github.io/KIR-SMPN-3/pdfs/${room.replace(/\s/g, "_")}.pdf`;

            // Buka PDF di tab baru
            window.open(pdfUrl, "_blank");
        });
    }

    // Tombol Perawatan (Google Form - link sama untuk semua)
    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan"; // Ganti dengan link Google Form
    });
});
