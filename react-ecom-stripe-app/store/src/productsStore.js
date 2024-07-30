// Coffee = prod_QZTdMhcZTU4q9o
// Sunglasses = prod_QZTeciJtqFpDoV
// Camera = prod_QZTegkeB7QnjZK
// Car = prod_QZTeNqp6hyS2P6
// Dog = prod_QZTf5sKvfJB2dZ
const productsArray = [
  {
    id: "price_1PiKfnJYT43RqlSSrcXwzcmN",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1PiKh1JYT43RqlSSn9KUxEKz",
    title: "Sunglasses",
    price: 10.99,
  },
  {
    id: "price_1PiKhJJYT43RqlSS03sHEuk0",
    title: "Camera",
    price: 214.99,
  },
  {
    id: "price_1PiKhVJYT43RqlSSxuhrJY6Y",
    title: "Car",
    price: 3245.99,
  },
  {
    id: "price_1PiKhgJYT43RqlSS90l11vnc",
    title: "Dog",
    price: 114.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) console.log("Product data does not exist");

  return productData;
}

export { productsArray, getProductData };
