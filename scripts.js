// Datos de los peluditos
const peluditos = [
    { nombre: "Daisy", edad: "2 años", descripcion: "Daisy es una gatita juguetona y cariñosa, ideal para una familia activa." },
    { nombre: "LUZ", edad: "1 año", descripcion: "LUZ es una perrita dulce, tranquila y muy sociable." },
    { nombre: "Max", edad: "3 años", descripcion: "Max es un gato independiente pero cariñoso cuando se le da tiempo." },
    { nombre: "Luna", edad: "2 años", descripcion: "Luna es una gatita curiosa y juguetona, le encanta explorar." },
    { nombre: "Sal", edad: "3 años", descripcion: "Sal es un perro juguetón y leal, ideal para el campo o una casa grande." },
    { nombre: "Peper", edad: "5 años", descripcion: "Peper es un perro amigable y tranquilo, perfecto para compañía." },
    { nombre: "Rio", edad: "4 años", descripcion: "Rio es un cachorro enérgico que necesita mucho amor y ejercicio." },
    { nombre: "Pancho", edad: "6 años", descripcion: "Pancho es un perro cariñoso que disfruta las caminatas largas." },
    { nombre: "Minnie", edad: "2 años", descripcion: "Minnie es una perrita juguetona y curiosa, siempre lista para explorar." },
    { nombre: "Jam", edad: "3 años", descripcion: "Jam es un compañero leal, protector y muy afectuoso." }
];

function mostrarInformacion(index) {
    document.getElementById("Nombre" + (index + 1)).textContent = peluditos[index].nombre;
    document.getElementById("Edad" + (index + 1)).textContent = peluditos[index].edad;
    document.getElementById("Descripcion" + (index + 1)).textContent = peluditos[index].descripcion;
}

for (let i = 0; i < peluditos.length; i++) {
    const imgId = "Peludito" + (i + 1) + "Img";
    document.getElementById(imgId).addEventListener("click", function () {
        mostrarInformacion(i);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const botonesAdoptar = document.querySelectorAll('#Adoptar');


    botonesAdoptar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const nombre = boton.previousElementSibling.previousElementSibling.textContent;

            const respuesta = confirm(`¿Deseas adoptar?`);
            if (respuesta) {
                alert(`¡Gracias, te contactaremos en breve`);
            } else {
                alert(`¡Sigue buscando a tu compañero ideal!`);
            }
        });
    });
});
