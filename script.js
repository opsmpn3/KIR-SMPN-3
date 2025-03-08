document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;
        document.getElementById("kir-btn").addEventListener("click", function () {
            document.getElementById("pdf-viewer").src = `pdfs/${room.replace(/\s/g, "_")}.pdf`;
            document.getElementById("pdf-modal").style.display = "flex";
        });
    }

    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.google.com/perawatan";
    });

    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("pdf-modal").style.display = "none";
    });
});
