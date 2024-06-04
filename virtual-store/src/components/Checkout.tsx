import { useState, useRef, useEffect } from "react";
import styles from "./Checkout.module.css";

function Checkout(props) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef(null);

  useEffect(() => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const one = productsOnCart.find((item) => item.id === product.id);
    if (one) {
      setQuantity(one.units);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);

  const manageCart = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const one = productsOnCart.find((each) => each.id === product.id);

    if (!one) {
      product.units = Number(units.current.value);
      productsOnCart.push(product);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };

  return (
    <div className={styles["product-checkout-block"]}>
      <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>

        <h2 id="price" className={styles["checkout-total-price"]}>
          ${(product.price * quantity).toLocaleString()}
        </h2>

        <p className={styles["checkout-description"]}>
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
          haciendo la solicitud en AFIP.
        </p>

        <ul className={styles["checkout-policy-list"]}>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/truck.png" alt="Truck" />
            </span>
            <span className={styles["policy-desc"]}>
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/plane.png" alt="Plane" />
            </span>
            <span className={styles["policy-desc"]}>
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
              envío normal
            </span>
          </li>
        </ul>

        <div className={styles["checkout-process"]}>
          <div className={styles["top"]}>
            <input
              id="input-quantity"
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={button ? styles["remove-btn"] : styles["cart-btn"]}
              onClick={manageCart}
            >
              {button ? "Remover del carrito" : "Añadir al carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
