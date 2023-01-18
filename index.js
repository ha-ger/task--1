let allImages = document.querySelectorAll(".image");

allImages.forEach(function (img) {
  img.addEventListener("click", remove);
});

function remove(e) {
  allImages.forEach((image) => image.classList.remove("active"));
  e.currentTarget.classList.add("active");
}
