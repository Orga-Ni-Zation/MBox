const mongoose = require('mongoose');
const Product = require('../api/Product/ProductModel');
mongoose.connect(`mongodb://localhost/mbox`);

const products = [{
  name: 'bottle',
  image: "https://ae01.alicdn.com/kf/HTB1zjDAJVXXXXaKXFXXq6xXFXXXO/KEAN-caliente-550-ML-Libre-de-BPA-a-prueba-de-Fugas-Port-til-Botella-de-Agua.jpg_50x50.jpg",
  description: 'BPA FREE Brief Thermos Sports Drink Bottle for School Outdoor Tour Creative Fashion Portable Leak',
  category: ['sport'],
  gender: ['both'],
  price: 5,
  priceCategory: ['low'],
},{
  name: 'bracelet',
  image: "https://ae01.alicdn.com/kf/HTB1LPpqLXXXXXanXFXXq6xXFXXX0/Nuevo-Estilo-2017-ltimas-Populares-5-Vueltas-Pulsera-de-Cuero-hombres-Encanto-de-La-Vendimia.jpg_50x50.jpg",
  description: 'Exclusive Fashion Bracelet for Men',
  category: ['accesory', 'fashion'],
  gender: ['male'],
  price: 10,
  priceCategory: ['low'],
},{
  name: 'wallet',
  image: "http://pngimg.com/uploads/wallet/wallet_PNG7516.png",
  description: 'Exclusive Fashion Wallet for Men',
  category: ['accesory', 'fashion'],
  gender: ['male'],
  price: 15,
  priceCategory: ['high'],
},{
  name: 'Lazio Jersey',
  image: "https://ae01.alicdn.com/kf/HTB1AUbSOVXXXXa1XFXXq6xXFXXXE/Marca-de-f-brica-famosa-de-Negocios-Hombres-de-Cuero-Genuino-Cartera-Peque-a-Ultra-Delgado.jpg_50x50.jpg",
  description: 'Exclusive Fashion Wallet for Men',
  category: ['sport', 'fashion'],
  gender: ['male'],
  price: 15,
  priceCategory: ['medium'],
},{
  name: 'watch',
  image: "http://image.pandawhole.com/4/a/3/4cb896ef-f87a-4bb9-b274-3993c3ca43a4.JPG",
  description: 'Exclusive hipster watch for women',
  category: ['accesory', 'fashion'],
  gender: ['female'],
  price: 8,
  priceCategory: ['medium'],
},{
  name: 'wallet',
  image: "http://image.pandawhole.com/4/a/3/4cb896ef-f87a-4bb9-b274-3993c3ca43a4.JPG",
  description: 'Impresive fashion wallet for women',
  category: ['accesory', 'fashion'],
  gender: ['female'],
  price: 10,
  priceCategory: ['medium'],
}
];

Product.create(products, (err, products) => {
  if (err){ throw(err); }
  console.log("Success", products);
  mongoose.connection.close();
});
