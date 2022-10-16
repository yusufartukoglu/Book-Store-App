import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 24.99,
    title: "The Design of Everyday Things",
    description:
      "Design doesn't have to complicated, which is why this guide to human-centered design shows that usability is just as important as aesthetics.",
  },
  {
    id: "p2",
    price: 18.99,
    title: "Coding with JavaScript For Dummies",
    description:
      "Go from beginner to builder quickly with this hands-on JavaScript guide.",
  },
  {
    id: "p3",
    price: 29.99,
    title:
      "The Road to React: Your journey to master plain yet pragmatic React.js",
    description:
      "The Road to React: Your journey to master React.js in JavaScript - is a comprehensive and pragmatic yet concise React feat. Hooks book.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite book</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
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
