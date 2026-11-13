const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const promociones = [
  {
    descuento: 'Combo',
    titulo: '2L Lavandina + 2L Jabón + 1 Detergente',
    precio: 3800
  },
  {
    descuento: 'Combo',
    titulo: '3L Jabón Líquido',
    precio: 2500
  },
  {
    descuento: 'Combo',
    titulo: '2L Lavandina + 2L Desodorante Piso + 2L Jabón + 1L Detergente',
    precio: 5100
  }
];

const productos = [
  {
    nombre: 'Lavandina',
    descripcion: 'Ideal para desinfección profunda en cocina, baño y pisos.',
    precio: 600,
    stock: 12,
    imagen: '/img/lavandina.jpeg'
  },
  {
    nombre: 'Detergente',
    descripcion: 'Detergente con aroma a limón para una limpieza fresca y poderosa.',
    precio: 1300,
    stock: 8,
    imagen: '/img/detergente.jpeg'
  },
  {
    nombre: 'Jabón Líquido',
    descripcion: 'Excelente para tu ropa con un aroma riquísimo.',
    precio: 900,
    stock: 15,
    imagen: '/img/jabon-liquido.jpeg'
  },
  {
    nombre: 'Desodorante Piso',
    descripcion: 'Perfume agradable para pisos, con acción refrescante y brillante.',
    precio: 700,
    stock: 5,
    imagen: '/img/desodorante-piso.jpeg'
  }
];

app.get('/', (req, res) => {
  res.render('pages/index', { promociones, productos });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
