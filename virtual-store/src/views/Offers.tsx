import styles from "./Offers.module.css"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Offers (){
    return <>
        <NavBar/>
        <Hero first="Principales" second="ofertas"  />
        <div className={styles["text-example"]}>Ofertas</div>
        <Footer/>
    </>
}

export default Offers