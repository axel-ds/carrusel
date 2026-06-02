var imagenes = [
    "IMG/1.jpg",
    "IMG/2.jpg",
    "IMG/3.jpg",
    "IMG/4.jpg",
    "IMG/5.jpg",
];
var i = 0;

document.getElementById("siguiente").addEventListener("click", () => {
    if (i < 4) {
        i++;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});

document.getElementById("anterior").addEventListener("click", () => {
    if (i > 0) {
        i--;
    }
    document.getElementById("carrusel").setAttribute("src", imagenes[i]);
});