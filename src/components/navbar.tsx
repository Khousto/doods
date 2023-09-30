"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavBar() {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item} data-active={segment === null}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item} data-active={segment === "bd"}>
          <Link href="/bd">BD</Link>
        </li>
        <li className={styles.item} data-active={segment === "illustrations"}>
          <Link href="/illustrations">Illustrations</Link>
        </li>
        <li className={styles.item} data-active={segment === "shop"}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.item} data-active={segment === "about"}>
          <Link href="/about">About me!</Link>
        </li>
      </ul>
    </nav>
  );
}
