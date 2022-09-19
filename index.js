const pizzas = {
    nombres: ["comun", "especial", "napolitana", "fugazzetta", "anana", "primavera", "panceta"],
}

console.log(pizzas);

const tiposDePizzas = [{
        id: 1,
        nombre: "Comun",
        ingredientes: ["salsa", "queso", "oregano"],
        precio: 600,
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["salsa", "queso", "jamon", "aceituna", "morron"],
        precio: 700,
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["salsa", "queso", "tomate", "oregano"],
        precio: 900,
    },
    {
        id: 4,
        nombre: "Fugazzetta",
        ingredientes: ["salsa", "queso", "cebolla", "aceituna"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "Anana",
        ingredientes: ["salsa", "queso", "jamon", "anana", "cereza"],
        precio: 1200,
    },
    {
        id: 6,
        nombre: "Primavera",
        ingredientes: ["salsa", "queso", "tomate", "aceituna", "morron", "ajo", "perejil"],
        precio: 1300,
    },
    {
        id: 7,
        nombre: "Panceta",
        ingredientes: ["salsa", "queso", "panceta", "aceituna", "oliva"],
        precio: 1500,
    }
];
decirPrecios("Comun", 500);
decirPrecios("Especial", 700);
decirPrecios("Napolitana", 900);
decirPrecios("Fugazzetta", 1000);
decirPrecios("Anana", 1200);
decirPrecios("Primavera", 1300);
decirPrecios("Panceta", 1500);

function decirPrecios(nombre, precio) {
    console.log("Hola, la pizza " + nombre + " tiene un valor de $ " + precio);
};

const arrayFiltrado = tiposDePizzas.filter(
    (objetoActual) => objetoActual.precio < 600
);

const contenedor = document.getElementById("contenedor");

localStorage.setItem("Pizzas", "Mely Saavedra");

const input = document.querySelector(".numeros");
const addForm = document.querySelector(".add-form");
const tasksList = document.querySelector(".tasks-list");

const addTask = (e) => {
    e.preventDefault();
/* 
    const taskName = input.value;
    console.log({taskName}); */
};

const init = () => {
    addForm.addEventListener("submit", addTask);
}

init();
/* 
console.log(numeros); */
/* const mostrar = () => {
    const nro = input.value;
    const getObj = pizzas.find((tiposDePizzas) => tiposDePizzas.id === nro);
    console.log(getObj.id);
};
mostrar(); */




