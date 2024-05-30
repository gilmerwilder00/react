import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// --
import products from "../assets/products.js";
import { useParams } from "react-router-dom";
// import Hero from "../components/Hero.js";
import ProductCard from "../components/ProductCard.js";
import NotFound from "./NotFound.js";



function Details() {

  // Se obtiene el id pasado como parámetro en el URL
  const { id } = useParams();

  // Se obtiene el producto con el id 
  const product = products.find((product) => product.id === id);

  // Se obtiene los productos que estan en oferta
  const onsale  = products.filter((product)=> product.onsale)

  // console.log(product);

  if(product){
    return (
      <>
        <NavBar />
        {/* Renderización condicional (uso de operador &&) */}
        {/* {!product && <Hero first="Not" second="Found"  />  } */}
  
        <main>
          <div className={styles["details-container"]}>
  
            <div id="details" className={styles["columns-container"]}>

              <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                  <img
                    className={styles["mini-img"]}
                    // src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                    // alt="MacBook Pro 13'4"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <img
                    className={styles["mini-img"]}
                    // src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
                    // alt="MacBook Pro 13'4"
                    src={product.images[1]}
                    alt={product.title}
                  />
                </div>
                <img
                  className={styles["big-img"]}
                  id="big-img"
                    // src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                    // alt="MacBook Pro 13'4"
                    src={product.images[0]}
                    alt={product.title}
                />
              </section>


              <div className={styles["product-description-block"]}>
                {/* <h1 className={styles["product-title"]}>MacBook Pro 13'4</h1> */}
                <h1 className={styles["product-title"]}>{product.title}</h1>
                <form className={styles["product-selector"]}>
                  <fieldset className={styles["product-fieldset"]}>
                    <label className={styles["product-label"]} htmlFor="color">
                      Color
                    </label>
                    <select
                      className={styles["product-select"]}
                      id="color"
                      >
                      {/* <option value="Silver">Silver</option> */}
                      {/* <option value={product.colors[0]}>{product.colors[0]}</option>
                      <option value={product.colors[1]}>{product.colors[1]}</option>
                      <option value={product.colors[2]}>{product.colors[2]}</option> */}
                       {
                          product.colors.map( (each,index)=> (
                            <option key={index} value={each}> {each}</option>
                          ) )
                       } 

                    </select>
                  </fieldset>
                </form>
                <div className={styles["product-description"]}>
                  <span className={styles["product-label"]}>Descripción</span>
                  {/* <p>
                    Experience the power of creativity with the MacBook Pro 13'4.
                    Featuring 8GB of RAM and 512GB of storage, this laptop
                    provides the performance and storage capacity needed for
                    demanding tasks. The sleek design in silver and space gray
                    adds a touch of sophistication. The high-resolution Retina
                    display brings your visuals to life, whether you're editing
                    photos, creating videos, or simply browsing the web. With the
                    latest technology and a lightweight build, the MacBook Pro
                    13'4 is the perfect companion for professionals and creative
                    individuals alike.
                  </p> */}
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>


              <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                  <span className={styles["checkout-total-label"]}>Total:</span>
                  {/* <h2 id="price" className={styles["checkout-total-price"]}>
                    $750000
                  </h2> */}
                  <h2 id="price" className={styles["checkout-total-price"]}>
                    ${product.price}
                  </h2>
                  <p className={styles["checkout-description"]}>
                    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                    50711 haciendo la solicitud en AFIP.
                  </p>
                  <ul className={styles["checkout-policy-list"]}>
                    <li>
                      <span className={styles["policy-icon"]}>
                        <img src="/truck.png" alt="Truck" />
                      </span>
                      <span className={styles["policy-desc"]}>
                        Agrega el producto al carrito para conocer los costos de
                        envío
                      </span>
                    </li>
                    <li>
                      <span className={styles["policy-icon"]}>
                        <img src="/plane.png" alt="Plane" />
                      </span>
                      <span className={styles["policy-desc"]}>
                        Recibí aproximadamente entre 10 y 15 días hábiles,
                        seleccionando envío normal
                      </span>
                    </li>
                  </ul>

                  <div className={styles["checkout-process"]}>
                    <div className={styles["top"]}>
                      <input type="number" min="1" defaultValue="1" />
                      <button type="button" className={styles["cart-btn"]}>
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>


            </div>
  
  
            <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div id="product-container" className={styles["product-container"]}>
  
  
  {/* 
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>
                      Kindle Paperwhite
                    </span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a> */}
  
                {
                  onsale.map( (product)=>(
                    <ProductCard
                      key = {product.id}
                      id = {product.id}
                      title = {product.title}
                      price = {product.price}
                      color = {product.colors[0]}
                      image = {product.images[0]}
                    />
                  ))
                }
  
  
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );


  }

  return (
    <>
    <NotFound/>
    </>
  )


}

export default Details;
