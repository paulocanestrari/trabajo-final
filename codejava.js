const imagcarr = [
  {
    imagen: "imagenes/fondo2.jpg",
    texto: "Salto del Tigre (sierras Comechingones)",
  },
  { imagen: "imagenes/caminonogoli.png", texto: "camino a remanzos de Nogoli" },
  { imagen: "imagenes/nogoli.jpg", texto: "camino a remanzos de Nogoli" },
  {
    imagen: "imagenes/caminodelalibre.jpg",
    texto: " Camino Salto de la negra libre",
  },
  { imagen: "imagenes/saltodelalibre.jpg", texto: " Salto de la negra libre" },
  {
    imagen: "imagenes/rincondelasuvas.jpg",
    texto: "Camino hacia el rincon de las uvas",
  },
  {
    imagen: "imagenes/rincondeuvas.jpg",
    texto: "Remanzo rincon de las uvas",
  },
  {
    imagen: "imagenes/comechingones.jpg",
    texto: " Trekk sierra comenchingones",
  },
  { imagen: "imagenes/comenchingones.jpg", texto: "Mirador Comechingones" },
  {
    imagen: "imagenes/travesia_comechingones.jpg",
    texto: "Trekk sierras comechingones",
  },
  {
    imagen: "imagenes/sierra_de_las_quijadas.jpg",
    texto: "Trekk sierras de las Quijadas",
  },
];

let longarray = imagcarr.length - 1;
let carrindex = 0;

let indc=document.getElementsByClassName("indicador");
let foto=document.getElementById("fotocarr");
mostrarcarrusel(0);

function siguiente(ind) {
  
  carrindex += ind;
  if (carrindex > longarray) {
    carrindex = 0;
  }
  mostrarcarrusel(carrindex);
}
function anterior(ind) {
  
  carrindex += ind;
  if (carrindex < 0) {
    carrindex = longarray;
  }
  mostrarcarrusel(carrindex);
}
function mostrarcarrusel(ind) {
    foto.src = imagcarr[ind].imagen;

  document.getElementById("textoim").innerText = imagcarr[ind].texto;
    for (i = 0; i < indc.length; i++) {
    indc[i].classList.remove("active");
   }
   foto.classList.add("fade");
    indc[ind].classList.add("active");
    setTimeout(cambiarclase, 600);
    }
   
    function cambiarclase() {
      foto.classList.remove("fade");
    }
/*-------------menu navegador -----------------------------*/
let nav = document.querySelector('.navbar');
document.getElementById('mobile-menu').addEventListener('click', abrir)
function abrir() {
  nav.classList.add('menu-open');
};
nav.addEventListener('mouseleave', cerrar) 
function cerrar(){
  
  nav.classList.remove('menu-open');
};


