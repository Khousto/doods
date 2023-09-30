import type { Metadata } from "next";
import Image from "next/image";
import mementoMori from "./404.png";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <>
      <h1>404 | Oh ! Il semblerait que vous vous soyez perdu !</h1>
      <Image
        src={mementoMori}
        alt="Memento Mori dans un cercle"
        style={{ width: "25%", height: "auto" }}
      />
    </>
  );
}
