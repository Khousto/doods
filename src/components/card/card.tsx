"use client";

import type { StaticImageData } from "next/image";
import styles from "./card.module.css";
import Image from "next/image";
import type { Route } from "next";
import { useRouter } from "next/navigation";

interface Props {
  image: StaticImageData;
  alt: string;
  title: string;
  href: Route;
}

export default function Card(props: Props) {
  const router = useRouter();

  return (
    <div className={styles.root} onClick={() => router.push(props.href)}>
      <Image src={props.image} alt={props.alt} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  );
}
