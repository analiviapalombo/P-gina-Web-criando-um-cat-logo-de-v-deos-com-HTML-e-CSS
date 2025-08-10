// -------- CONFIGURAÇÕES EDITÁVEIS --------

// Texto da barra superior
document.getElementById("site-title").innerText = "FUFFLE PUFF TALES"; 

// Texto do rodapé
document.getElementById("footer-text").innerText = "feito por Nana";

// Link do Twitter
document.getElementById("twitter-link").href = "https://twitter.com/seu_usuario";

// -------- LISTA DAS 27 SEÇÕES --------
const sectionsData = [
    { texto: "Just Another Day", video: "https://www.youtube.com/embed/A9T3CIZvPUY" },
    { texto: "Bubbles", video: "https://www.youtube.com/embed/y4idKg2mhcQ" },
    { texto: "Appleperrrrr", video: "https://www.youtube.com/embed/NedksFQQ4PM" },
    { texto: "Kiss Kiss", video: "https://www.youtube.com/embed/L9LCLktP_g4" },
    { texto: "All Boxxed Up", video: "https://www.youtube.com/embed/sijyLYjsD34" },
    { texto: "EG", video: "https://www.youtube.com/embed/sijyLYjsD34" },
    { texto: "Vroom Vroom", video: "https://www.youtube.com/embed/kt3xHaeqhRA" },
    { texto: "Nightmare Night", video: "https://www.youtube.com/embed/Tw6T3hCsOhA" },
    { texto: "Master of Pillows", video: "https://www.youtube.com/embed/rMFWc_FMhqs" },
    { texto: "Christmas Special", video: "https://www.youtube.com/embed/lplUHZEaPrM" },
    { texto: "Special Somepony", video: "https://www.youtube.com/embed/pIVEe5bsV-w" },
    { texto: "EG Part 2", video: "https://www.youtube.com/embed/hT4EWKwSvIw" },
    { texto: "Fluffside Out", video: "https://www.youtube.com/embed/-Uxv9nxRhY4" },
    { texto: "Flufflurama", video: "https://www.youtube.com/embed/20doefeSbek" },
    { texto: "Tug of War", video: "https://www.youtube.com/embed/vJ8nJb6buN0" },
    { texto: "EG Part 3", video: "https://www.youtube.com/embed/soPYEfY3yRY" },
    { texto: "Nightmare Night 2", video: "https://www.youtube.com/embed/eyv1BipQI9w" },
    { texto: "2pones1pillow.mov", video: "https://www.youtube.com/embed/J9FiRDOL4Ow" },
    { texto: "space_tissues.mov", video: "https://www.youtube.com/embed/oY3M6tDv4pM" },
    { texto: "Horse M.D", video: "https://www.youtube.com/embed/lvtS4vfxXpI" },
    { texto: "Murry Burthmis", video: "https://www.youtube.com/embed/gN-PIDQgsPY" },
    { texto: "Poptart", video: "https://www.youtube.com/embed/Rw9BN8Is5tA" },
    { texto: "Electric Floofaloo", video: "https://www.youtube.com/embed/fmdW8pk79iM" },
    { texto: "My Little Foody", video: "https://www.youtube.com/embed/mTLGxBMo6tQ" },
    { texto: "Attack on Bughorse", video: "https://www.youtube.com/embed/R_7UCaK_Otk" },
    { texto: "Khuppkheighckes", video: "https://www.youtube.com/embed/KV1IjGLng5k" },
    { texto: "Poofle Universe", video: "https://www.youtube.com/embed/SZmBs28Ss5M" }
];

// -------- GERAÇÃO DAS SEÇÕES NO HTML --------
const contentDiv = document.getElementById("content");

sectionsData.forEach(sec => {
    const section = document.createElement("div");
    section.className = "section";

    const textDiv = document.createElement("div");
    textDiv.className = "section-text";
    textDiv.innerText = sec.texto;

    const videoDiv = document.createElement("div");
    videoDiv.className = "section-video";
    videoDiv.innerHTML = `<iframe src="${sec.video}" allowfullscreen></iframe>`;

    section.appendChild(textDiv);
    section.appendChild(videoDiv);
    contentDiv.appendChild(section);
});
