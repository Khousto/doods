import type { Metadata } from "next";
import Card from "~/components/card/card";
import PageTitle from "~/components/page-title/page-title";

import styles from "./page.module.css";

import asper from "./asper.jpg";
import histoires from "./histoires.jpg";
import lcda from "./lcda.jpg";

export const metadata: Metadata = {
  title: "BD",
};

export default function Comics() {
  return (
    <>
      <PageTitle>Bande-Dessinée</PageTitle>

      <div className={styles.cards}>
        <Card
          image={asper}
          alt="illu asper"
          title="Asperger Journey"
          href="/bd/asper"
        />
        <Card
          image={lcda}
          alt="illu lcda"
          title="Les Chroniques d'Andium"
          href="/bd/lcda"
        />
        <Card
          image={histoires}
          alt="illu histoires"
          title="Histoires"
          href="/bd/histoires"
        />
      </div>
    </>
  );
}
