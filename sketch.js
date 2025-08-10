// -------- CONFIGURAÇÕES EDITÁVEIS --------

// Texto da barra superior
document.getElementById("site-title").innerText = "FUFFLE PUFF TALES"; 

// Texto do rodapé
document.getElementById("footer-text").innerText = "feito por Nana";

// Link do Twitter
document.getElementById("twitter-link").href = "https://twitter.com/seu_usuario";
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
