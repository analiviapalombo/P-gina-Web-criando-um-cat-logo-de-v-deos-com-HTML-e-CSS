// -------- CONFIGURAÇÕES EDITÁVEIS --------

// Texto da barra superior
document.getElementById("site-title").innerText = "FUFFLE PUFF TALES"; 

// Texto do rodapé
document.getElementById("footer-text").innerText = "feito por AnaLívia Palombo (nanamori)";

// Link do Twitter
document.getElementById("twitter-link").href = "https://x.com/shibufyo69";

// Dados para as 27 seções
// Você pode editar "texto" e "video" para mudar cada bloco
const sectionsData = [
    { texto: "Just Another Day", video: "https://youtu.be/A9T3CIZvPUY?si=4Shis9flpD-Jv4lh" },
    { texto: "Bubbles", video: "https://youtu.be/y4idKg2mhcQ?si=i1eEJb2Cr5pcQsL5" },
    { texto: "Appleperrrrr", video: "https://youtu.be/NedksFQQ4PM?si=emDEcXfPomCrP8rt" },
    { texto: "Kiss Kiss", video: "https://youtu.be/L9LCLktP_g4?si=QdZZoAmRWahK2lNP" },
    { texto: "All Boxxed Up", video: "hhttps://youtu.be/sijyLYjsD34?si=pgve5Xa2DpxSV0_6" },
    { texto: "EG", video: "https://youtu.be/sijyLYjsD34?si=EDmjblz1NeopRnXF" },
    { texto: "Vroom Vroom", video: "https://youtu.be/kt3xHaeqhRA?si=lguzgd3h__cnBSso" },
    { texto: "Nightmare Night", video: "https://youtu.be/Tw6T3hCsOhA?si=F9zUjt0c9I2MppsI" },
    { texto: "Master of Pillows", video: "https://youtu.be/rMFWc_FMhqs?si=7sqACp8Y7S5HeQfi" },
    { texto: "Christmas Special", video: "https://youtu.be/lplUHZEaPrM?si=x0nR8DYKuG9ZclEA" },
    { texto: "Special Somepony", video: "https://youtu.be/pIVEe5bsV-w?si=ZOKzdYzZ_EPA6z1N" },
    { texto: "EG Part 2", video: "https://youtu.be/hT4EWKwSvIw?si=TOQhuBM6dPosnP6S" },
    { texto: "Fluffside Out", video: "https://youtu.be/-Uxv9nxRhY4?si=21PEMX9BirlKGpCo" },
    { texto: "Flufflurama", video: "https://youtu.be/20doefeSbek?si=nVEIjQiX0W9C3Ecp" },
    { texto: "Tug of War", video: "https://youtu.be/vJ8nJb6buN0?si=lIqCJG_fejE20Pn_" },
    { texto: "EG Part 3", video: "https://youtu.be/soPYEfY3yRY?si=VFglFbtUW0iJKEKs" },
    { texto: "Nightmare Night", video: "https://youtu.be/eyv1BipQI9w?si=YUFITXsdyMtO0gEY" },
    { texto: "2pones1pillow.mov", video: "https://youtu.be/J9FiRDOL4Ow?si=FbCbMTnhEcsNg-E-" },
    { texto: "space_tissues.mov", video: "https://youtu.be/oY3M6tDv4pM?si=K_eeDXgFeYRmzw77" },
    { texto: "Horse M.D", video: "https://youtu.be/lvtS4vfxXpI?si=FALh5yQ3PFwx0Vg5" },
    { texto: "Murry Burthmis", video: "https://youtu.be/gN-PIDQgsPY?si=ggCMDtxlu0oPZKkA" },
    { texto: "Poptart", video: "hthttps://youtu.be/Rw9BN8Is5tA?si=3P3v2hXMfJkZNjgz" },
    { texto: "Electric Floofaloo", video: "https://youtu.be/fmdW8pk79iM?si=AylPH_9Vk7jXafPn" },
    { texto: "My Little Foody", video: "https://youtu.be/mTLGxBMo6tQ?si=NHJQtvRBDzwPzj1D" },
    { texto: "Attack on Bughorse", video: "https://youtu.be/R_7UCaK_Otk?si=zZmExFdgjUpfk584" },
    { texto: "Khuppkheighckes", video: "https://youtu.be/KV1IjGLng5k?si=5VFme0IzIB-kxL52" },
    { texto: "Poofle Universe", video: "https://youtu.be/SZmBs28Ss5M?si=Mus33mTck21IaUV_" },
    
];
}

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
