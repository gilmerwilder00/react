import styles from "./NotFound.module.css"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function NotFound(){
    return <>
        <NavBar/>
        <Hero first="404" second="not found"  />
        <div className={styles["text-example"]}>404 Not Found</div>
        <Footer/>
    </>
}

export default NotFound