import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "~/components/navbar";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Doods", template: "%s | Doods" },
  description: "For my Doods!",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NavBar />
        <main className={styles.main}>{props.children}</main>
      </body>
    </html>
  );
}
