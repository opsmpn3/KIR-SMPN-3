document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        // Ketika tombol KIR diklik, buka PDF di tab baru seperti Google Drive
        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfUrl = `${location.origin}/pdfs/${room.replace(/\s/g, "_")}.pdf`;

            // Langsung buka tab baru untuk pengalaman Google Drive PDF Viewer
            window.open(pdfUrl, "_blank");
        });
    }

    // Tombol Perawatan (Google Form - link sama untuk semua)
    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan"; // Ganti dengan link Google Form
    });
});
