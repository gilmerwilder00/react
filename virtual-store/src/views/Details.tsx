import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import products from "../assets/products.js";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.js";
import NotFound from "./NotFound.js";
import Thumbs from "../components/Thumbs.js";
import Description from "../components/Descriptions.js";
import Checkout from "../components/Checkout.js";

function Details() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const onsale = products.filter((product) => product.onsale);

  if (product) {
    return (
      <>
        <NavBar />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <Thumbs product={product} />
              <Description product={product} />
              <Checkout product={product} />
            </div>

            <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div
                id="product-container"
                className={styles["product-container"]}
              >
                {onsale.map((product) => (
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
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return <NotFound />;
}

export default Details;
