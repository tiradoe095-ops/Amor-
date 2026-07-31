// Crear corazones flotantes
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");

    corazon.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 30) + "px";
    corazon.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 12000);
}

// Crear un corazón cada 300 ms
setInterval(crearCorazon, 300);

// Abrir la carta
const boton = document.getElementById("btn");
const carta = document.getElementById("carta");

boton.addEventListener("click", () => {

    carta.classList.remove("oculto");

    carta.animate([
        {
            opacity: 0,
            transform: "scale(0.7) rotate(-5deg)"
        },
        {
            opacity: 1,
            transform: "scale(1.05) rotate(2deg)"
        },
        {
            opacity: 1,
            transform: "scale(1)"
        }
    ], {
        duration: 1200,
        easing: "ease-out"
    });

    boton.innerHTML = "❤️ Te Amo ❤️";
});

// Efecto al mover el mouse
document.addEventListener("mousemove", (e) => {

    const brillo = document.createElement("div");

    brillo.style.position = "absolute";
    brillo.style.left = e.pageX + "px";
    brillo.style.top = e.pageY + "px";
    brillo.style.width = "8px";
    brillo.style.height = "8px";
    brillo.style.borderRadius = "50%";
    brillo.style.background = "white";
    brillo.style.boxShadow = "0 0 20px white";
    brillo.style.pointerEvents = "none";

    document.body.appendChild(brillo);

    brillo.animate([
        {
            opacity: 1,
            transform: "scale(1)"
        },
        {
            opacity: 0,
            transform: "scale(4)"
        }
    ], {
        duration: 800
    });

    setTimeout(() => {
        brillo.remove();
    }, 800);
});
