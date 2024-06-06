import styles from "./OnSale.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import OnSaleCard from "../components/OnSaleCard";
import products from "../assets/products.js";
import { useState } from "react";

function OnSale() {
  const onSaleProducts = products.filter((product) => product.onsale);
  const numProductsPerSlice = 3;
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(numProductsPerSlice);

  const slicedProducts = onSaleProducts.slice(from, to);

  const nextSug = () => {
    if (to < onSaleProducts.length) {
      setFrom(from + numProductsPerSlice);
      setTo(to + numProductsPerSlice);
    }
  };

  const prevSug = () => {
    if (from > 0) {
      setFrom(from - numProductsPerSlice);
      setTo(to - numProductsPerSlice);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <button onClick={prevSug}>Anterior</button>
        <div className={styles["product-container"]} id="products">
          {slicedProducts.map((product) => (
            <OnSaleCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              color={product.colors[0]}
              image={product.images[0]}
              discount={product.discount}
            />
          ))}
        </div>
        <button onClick={nextSug}>Siguiente</button>
      </main>
      <Footer />
    </>
  );
}

export default OnSale;
