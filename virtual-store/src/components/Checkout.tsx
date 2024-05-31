import { useState } from "react";
import styles from "./Checkout.module.css";

function Checkout(props) {
  const { product } = props;
                             
  const [quantity, setQuantity] = useState(1);

  let productsOnCart = JSON.parse(localStorage.getItem("cart") ?? '[]');
  const one = productsOnCart.find((each) => each.id === product.id);
  const productIncart = one ? true : false;
  const [button, setButton] = useState(productIncart);

  console.log(button);
  
  const manageCart = () => {
    // Obtener productos de carrito
    let productsOnCart = JSON.parse(localStorage.getItem("cart") ?? '[]');
    // Buscar producto actual en el carrito
    const one = productsOnCart.find((each) => each.id === product.id);
    // Si el producto no se encuentra en el carrito
    if (!one) {
      //se agrega el producto al arreglo de productos 
      productsOnCart.push(product);
      //Se actualiza el estado del botón a true   
      setButton(true);
    } else {// si el producto ya esta en el carrito
      // se obtiene todos los productos menos el que tiene el ID del producto actual (simula retiro de carrito) 
      productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    // se actualiza los productos los de carrito
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };

  return (
    <div className={styles["product-checkout-block"]}>
      <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>

        <h2 id="price" className={styles["checkout-total-price"]}>
          {/* ${product.price} */}
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
            {/* <input type="number" min="1" value="1" /> */}


            <input
              id="input-quantity" // se agrega id
              type="number"
              min="1"
              // defaultValue="1"
              defaultValue={quantity}
              onChange = { (event) => setQuantity(Number(event.target.value))  }
            />


            <button
              type="button"
            //   className={styles["cart-btn"]}
              className={ button ? styles["remove-btn"] : styles["cart-btn"]}
            //   onClick={() => setButton(!button)} // se actualiza el estado con el valor contrario a button
               onClick={manageCart} // se actualiza el estado con el valor contrario a button
            >

              {/* Añadir al Carrito */}

              {button ? "Remover del carrito" : "Añadir al carrito"}


            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
