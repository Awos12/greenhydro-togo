
const galleryItems = document.querySelectorAll(".gallery img, .gallery video");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  const item = galleryItems[index];

  // Nettoyer le contenu précédent
  lightboxContent.innerHTML = "";

  if (item.tagName === "IMG") {
    const img = document.createElement("img");
    img.src = item.src;
    lightboxContent.appendChild(img);
  } else if (item.tagName === "VIDEO") {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    lightboxContent.appendChild(video);
  }
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showLightbox(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxContent.innerHTML = "";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showLightbox(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showLightbox(currentIndex);
});
