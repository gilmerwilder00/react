// import of styles
import styles from "./Hero.module.css";

// definition and sport of Hero component
// export default function Hero() {
//   return (
//     <>
//       <section className={styles["hero-section"]}>
//         <article className={styles["hero-title"]}>
//           <span className={styles["hero-span"]}>tecnología</span>
//           <span className={styles["hero-span"]}>renovada</span>
//         </article>
//       </section>
//     </>
//   );
// }

export default function Hero({first, second}) {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{first}</span>
          <span className={styles["hero-span"]}>{second}</span>
        </article>
      </section>
    </>
  );
}
