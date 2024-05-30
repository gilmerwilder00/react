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
      {/* <Hero/> */}
      <Hero first="tecnología" second="renovada -Hola mundo" />
      <main>
        <div className={styles["product-container"]} id="products">


          {/* <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
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
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a> */}

{/*           
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}
         

          {/* {console.log("PRODUCTOS")} 
          {console.log(products)} */}

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

          {/* Paréntesis en lugar de llaves: Usamos paréntesis () después de la flecha => para implicar que estamos retornando JSX directamente desde la función flecha. */}

          {/* Retorno Implícito: Al usar paréntesis, se está retornando implícitamente el JSX sin necesidad de una declaración return. */}

          {/* {products.map((each) => {
            return (
              <ProductCard
                key={each.id}
                id={each.id}
                title={each.title}
                price={each.price}
                color={each.colors[0]}
                image={each.images[0]}
              />
            );
          })} */}

          {/* Para renderizar una lista de componentes en React, simplemente se usa map para devolver un arreglo de componentes JSX, y React se encargará de renderizarlos correctamente en el DOM. No  se necesita usar .join('') para unir los elementos del arreglo, ya que React maneja los arreglos de elementos JSX de manera adecuada. */}

        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
