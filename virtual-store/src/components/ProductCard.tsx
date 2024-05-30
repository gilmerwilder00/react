import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

// export default function ProductCard() {
//   return (
//     <a className={styles["product-card"]} href="./details.html">
//       <img
//         className={styles["product-img"]}
//         src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
//         alt="iPad Pro 12.9"
//       />
//       <div className={styles["product-info"]}>
//         <span className={styles["product-title"]}>iPad Pro 12.9</span>
//         <span className={styles["product-description"]}>Silver</span>
//         <div className={styles["product-price-block"]}>
//           <span className={styles["product-price"]}>900000</span>
//           <span className={styles["product-discount"]}>50% Off</span>
//         </div>
//         <div className={styles["product-tax-policy"]}>
//           Incluye impuesto País y percepción AFIP
//         </div>
//       </div>
//     </a>
//   );
// }


export default function ProductCard(props) {
    // Desestructuración de objetos
    const { id, title, price, color, image } = props;
    return (

     // <a className={styles["product-card"]} href="./details.html">  

                                             //  path:'/details/:id'
      <Link className={styles["product-card"]} to={"/details/" + id}>
        <img className={styles["product-img"]} src={image} alt={title} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{color}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>{price}</span>
            <span className={styles["product-discount"]}>50% Off</span>
          </div>
          <div className={styles["product-tax-policy"]}>
            Includes Country tax and AFIP collection
          </div>
        </div>
      </Link>
      
    //</a>
    );
  }
  