document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    if (room) {
        document.getElementById("room-name").textContent = room;

        document.getElementById("kir-btn").addEventListener("click", function () {
            const pdfUrl = `https://opsmpn3.github.io/KIR-SMPN-3/pdfs/${room.replace(/\s/g, "_")}.pdf`;

            // Coba buka dengan window.open() (berfungsi di PC)
            let newTab = window.open(pdfUrl, "_blank");

            // Jika browser memblokir window.open(), gunakan cara lain
            if (!newTab || newTab.closed || typeof newTab.closed == "undefined") {
                console.log("window.open() diblokir, mencoba metode alternatif...");
                
                // Gunakan window.location.href di HP
                if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
                    window.location.href = pdfUrl;
                } else {
                    // Alternatif terakhir: Gunakan Google Drive Viewer untuk tampilan optimal
                    window.location.href = `https://drive.google.com/viewerng/viewer?embedded=true&url=${pdfUrl}`;
                }
            }
        });
    }

    document.getElementById("maintenance-btn").addEventListener("click", function () {
        window.location.href = "https://forms.gle/8fNkuxBEJfP9j46W9";
    });
});
