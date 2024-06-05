import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "./ProductCard";
import products from "../assets/products.js";

function Home() {
  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada -Hola mundo" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              color={product.colors[0]}
              image={product.images[0]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
