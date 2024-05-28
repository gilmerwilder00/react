// import of styles
import styles from "./NavButton.module.css";

// NavBar component with props: title, link 
export default function NavButton({ title, link }) {
  return (
    <>
      <li className={styles["nav-li"]}>
        <a className={styles["nav-a"]} href={link}>
          {title}
        </a>
      </li>
    </>
  );
}
