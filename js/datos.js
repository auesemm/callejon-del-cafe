/* ============================================================
   DATOS DEL NEGOCIO: edita solo este bloque y el del MENÚ
   ============================================================ */
const N = {
  nombre:    "El Callejón del Café",
  lema:      "Cafetería Tradicional",
  whatsapp:  "525510281964",            // con código de país, sin + ni espacios
  telefono:  "55 1028 1964",
  email:     "callejondelcafe02@gmail.com",
  direccion: "Nuevo Laredo, Callejón, Norte 6, Ecatepec de Morelos, México, 55080",
  horario:   "Siempre abierto",
  facebook:  "https://www.facebook.com/search/top?q=El%20Callej%C3%B3n%20del%20Caf%C3%A9", // pega aquí el enlace de tu página
  tiktok:    "fernando.flores188",      // usuario sin @ (déjalo vacío "" para ocultarlo)
  mensajeWA: "Hola, quiero hacer un pedido"
};

/* ============================================================
   MENÚ. Cada producto: ["Nombre", precio, precio grande, "descripción"]
   - Con tamaños (sizes:true): primer precio = chico, segundo = grande
   - Sin segundo precio: usa null.  Sin precio: solo el nombre.
   ============================================================ */
const SABORES = "Fresa, menta, taro, chai, amaretto, arándano, cajeta, caramelo, chocolate blanco, crema irlandesa, coco, cereza, vainilla francesa, mazapán, mocha, chocomenta, frutas de la pasión, nuez de macadamia, frutos rojos";
const MENU = [
 {id:"calientes", t:"Bebidas calientes", foto:"espresso", groups:[
  {t:"Capuchinos", sizes:true, items:[
    ["Capuchino natural",35,45],
    ["Capuchino con sabor",40,50,"Sabores: "+SABORES],
    ["Capuchino Bailey's, rompope, Nutella o sabor de temporada",50,60]]},
  {t:"Espressos y tés", items:[
    ["Espresso",25],["Espresso cortado",35],["Espresso Bailey's",40],["Té",25],["Tisana",60]]},
  {t:"Clásicos", sizes:true, items:[
    ["Americano",25,35],["Latte",35,45],["Latte macciato",35,45],
    ["Chocolate",40,50],["Chocolate con panna",50,60],["Mocha con panna",50,60]]}
 ]},
 {id:"frias", t:"Bebidas frías", foto:"tazas", groups:[
  {t:"Frappés", sizes:true, items:[
    ["Frappé",50,60,"Sabores: "+SABORES+", oreo"],
    ["Frappé Bailey's, rompope, Nutella o sabor de temporada",60,70],
    ["Caramel macciato",50,60]]},
  {t:"Más bebidas frías", items:[
    ["Frappé yogurt",70,null,"Zarzamora o fresa"],
    ["Soda italiana",45],["Soda italiana con perlas moleculares",50],
    ["Soda frutal",60],["Soda mojito",60],["Malteada",50],["Chamoyada",50],
    ["Smoothie",50],["Afogato",45],["Tisana",60],["Té",30],["Refresco",30]]}
 ]},
 {id:"salados", t:"Salados", foto:"maquina", groups:[
  {t:"Mega-molletes", items:[["Sencillo",60],["Jamón",75],["Chorizo",75],["Tocino",75]]},
  {t:"Para picar", items:[
    ["Crostini",45,null,"Rodajas de pan tostado con salsa de tomate, jamón y queso parmesano"],
    ["Maruchan",45],["Sincronizada",50],["Ensaladas y omelette"]]},
  {t:"Baguette / Chapata", items:[
    ["Jamón",75],["Pechuga",75],["Chorizo",75],["Jamón serrano",95],
    ["Atún",85],["Champiñones",85],["Tres quesos",85]]},
  {t:"Croissant / Sándwich", items:[
    ["Jamón",50],["Pechuga",50],["Chorizo",50],["Jamón serrano",70],
    ["Atún",55],["Champiñones",55],["Tres quesos",60]]},
  {t:"Crepas saladas", nota:"Ingrediente extra: $10", items:[
    ["Hawaiana",65],["Tres quesos",65],["Champiñón con queso",65],
    ["Especial",65,null,"Salsa de tomate, jamón, quesos y parmesano"]]}
 ]},
 {id:"dulces", t:"Dulces", foto:"corazon", groups:[
  {t:"Crepas dulces", nota:"Rellenos: chocolate, lechera, cajeta o mermelada", items:[
    ["Clásica, 2 ingredientes",50],["Clásica con queso Philadelphia",60],
    ["Especial de cajeta",75],
    ["Nutella",55,null,"Toppings: arándano, chispas, nuez, almendra u oreo"],["Frutal",65]]},
  {t:"Hot cakes", nota:"Nutella, lechera, cajeta o mermelada", items:[["Hot cakes",40],["Hot cakes frutal",50]]},
  {t:"Croissant dulce", nota:"Nutella, lechera, cajeta o mermelada", items:[["Croissant",40],["Croissant frutal",50]]},
  {t:"Postres", items:[["Gelatina",20],["Flan",25],["Pasteles y pan dulce"]]}
 ]}
];
