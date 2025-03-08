document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        // Ketika tombol KIR diklik, buka PDF dengan Google Drive Viewer
        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfUrl = `pdfs/${room.replace(/\s/g, "_")}.pdf`;

            // Gunakan Google Drive Viewer untuk tampilan lebih smooth
            window.open(`https://drive.google.com/viewerng/viewer?embedded=true&url=${location.origin}/${pdfUrl}`, "_blank");
        });
    }

    // Tombol Perawatan (Google Form - link sama untuk semua)
    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan"; // Ganti dengan link Google Form
    });
});
