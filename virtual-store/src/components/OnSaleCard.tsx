import styles from "./OnSaleCard.module.css";
import { Link } from "react-router-dom";

function OnSaleCard(props) {

  const { id, title, price, color, image, discount } = props;

  const onSalePrice = Number(price) * (1 - Number(discount) / 100);

  const formattedPrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOnsalePrice = new Intl.NumberFormat("es-ES", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(onSalePrice);

  return (
    <Link className={styles["product-card"]} to={"/details/" + id}>
      <img className={styles["product-img"]} src={image} alt={title} />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{color}</span>

        {/* Incio */}
        <div className={styles["product-onsale-block"]}>
          <span className={styles["product-onsale-description"]}>Desde</span>
          <span className={styles["product-initial-price"]}>{`AR$. ${formattedPrice}`}</span>
        </div>
        {/* Fin */}

        <div className={styles["product-price-block"]}>
          <span
            className={styles["product-price"]}
          >{`AR$. ${formattedOnsalePrice}`}</span>
          <span className={styles["product-discount"]}>{discount}% OFF</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          ¡Comprá y pagá en pesos!
        </div>
      </div>
    </Link>
  );
}

export default OnSaleCard;
