import { useEffect, useState } from "react";
import styles from "./Thumbs.module.css";

function Thumbs(props) {
  const { product } = props;
  const [thumb, setThumb] = useState(product?.images[0] || "/mock1.jpg");

  useEffect( ()=>{
    setThumb(product?.images[0] || "/mock1.jpg");
  }, [product.id])

  return (
    <section className={styles["product-images-block"]}>
      <div className={styles["product-images"]}>
        {product.images.map((image, index) => (
          <img
            key={index}
            className={styles["mini-img"]}
            src={image}
            alt={`${product.title}-${index + 1}`}
            onClick={()=>{setThumb(image)}}
          />
        ))}
      </div>
      <img
        className={styles["big-img"]}
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}

export default Thumbs;
