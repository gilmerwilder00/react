// import of styles
import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";


// NavBar component with props: title, link 
export default function NavButton({ title, link }) {
  return (
    <>
      <li className={styles["nav-li"]}>
        {/* <a className={styles["nav-a"]} href={link}> */}
        <Link to={link} className={styles["nav-a"]}  >
          {title}
        </Link>
        {/* </a> */}
      </li>
    </>
  );
}
