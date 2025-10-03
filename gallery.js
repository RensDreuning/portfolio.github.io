document.addEventListener("DOMContentLoaded", () => {
    const lijst = {
        1: "https://rens-dreuning.client-gallery.com/gallery/bruiloft-r-en-p",
        2: "https://rens-dreuning.client-gallery.com/gallery/jos-talent-traject-showcase",
        3: "https://rens-dreuning.client-gallery.com/gallery/expositie",
        4: "https://rens-dreuning.client-gallery.com/gallery/wijz-vitaliteitsdag"
    };

    const titles = {
        1: "Bruiloft R&P",
        2: "@Jo's Talent Traject Showcase",
        3: "Expositie: De vervuiling van de Nederlandse kust",
        4: "WijZ Vitaliteitsdag"
    };

    // URL ophalen, bijvoorbeeld: gallery.html?id=4
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const iframe = document.getElementById("cloudspotIframe");

    if (!id || !lijst[id]) {
        // geen geldig id → terug naar portfolio
        location.href = 'index.html#portfolio';
    } else {
        // src vervangen door juiste url uit lijst
        iframe.src = lijst[id];
        document.getElementById("gallery_name").innerHTML = titles[id];
    }
});

