// CREAR ESTRELLAS ✨

const estrellas = document.getElementById("estrellas");

for(let i = 0; i < 120; i++){

    let estrella = document.createElement("span");

    estrella.className = "estrella";

    estrella.style.left = Math.random()*100 + "%";
    estrella.style.top = Math.random()*100 + "%";

    estrella.style.animationDelay =
    Math.random()*3 + "s";

    estrella.style.opacity =
    Math.random();

    estrellas.appendChild(estrella);

}



// CREAR CORAZONES ❤️

const corazones = document.getElementById("corazones");

function crearCorazon(){

    let corazon = document.createElement("div");

    corazon.className="corazon";

    let lista=[
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];

    corazon.innerHTML =
    lista[Math.floor(Math.random()*lista.length)];


    corazon.style.left =
    Math.random()*100+"%";


    corazon.style.fontSize =
    (20 + Math.random()*30)+"px";


    corazon.style.animationDuration =
    (5 + Math.random()*6)+"s";


    corazones.appendChild(corazon);



    setTimeout(()=>{

        corazon.remove();

    },10000);

}


setInterval(crearCorazon,350);




// CREAR PÉTALOS 🌹

const petalos = document.getElementById("petalos");


function crearPetalo(){

    let petalo=document.createElement("div");

    petalo.className="petalo";

    petalo.innerHTML="🌹";


    petalo.style.left=
    Math.random()*100+"%";


    petalo.style.fontSize=
    (15+Math.random()*25)+"px";


    petalo.style.animationDuration=
    (5+Math.random()*5)+"s";


    petalos.appendChild(petalo);


    setTimeout(()=>{

        petalo.remove();

    },10000);

}


setInterval(crearPetalo,800);




// ABRIR CARTA 💌

const boton=document.getElementById("abrir");

const carta=document.getElementById("carta");


boton.addEventListener("click",()=>{


    carta.style.display="block";


    boton.style.display="none";


    carta.animate(

        [

            {
                transform:
                "scale(.5) rotate(-10deg)",

                opacity:0
            },


            {

                transform:
                "scale(1.1) rotate(3deg)",

                opacity:1

            },


            {

                transform:
                "scale(1)",

                opacity:1

            }


        ],

        {

            duration:1500,

            easing:"ease-out"

        }

    );


});




// BRILLOS AL TOCAR LA PANTALLA ✨


document.addEventListener("click",(e)=>{


    let brillo=document.createElement("div");


    brillo.style.position="absolute";

    brillo.style.left=e.pageX+"px";

    brillo.style.top=e.pageY+"px";


    brillo.style.width="15px";

    brillo.style.height="15px";


    brillo.style.background="white";

    brillo.style.borderRadius="50%";

    brillo.style.boxShadow=
    "0 0 25px white";


    brillo.style.pointerEvents="none";


    document.body.appendChild(brillo);



    brillo.animate(

        [

            {
                transform:"scale(1)",

                opacity:1

            },


            {

                transform:"scale(5)",

                opacity:0

            }

        ],


        {

            duration:800

        }


    );


    setTimeout(()=>{

        brillo.remove();

    },800);


});
