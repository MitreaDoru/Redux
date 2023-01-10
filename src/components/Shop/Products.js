import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productsList = [
  {
    id: "p1",
    title: "Test",
    price: 6,
    description: " This is a first product - amazing!",
  },

  {
    id: "p2",
    title: "Test2",
    price: 10,
    description: "Yuhuuuu",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
