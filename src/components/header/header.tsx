import Image from "next/image";
import headerimg from "./header.jpg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={headerimg}
        alt="logo"
        className={styles.image}
        sizes="100vw"
      />
      <div className={styles.logo}>KLAYM DEM</div>
    </header>
  );
}
