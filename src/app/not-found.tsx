import type { Metadata } from "next";
import Image from "next/image";
import mementoMori from "./404.png";
import PageTitle from "~/components/page-title/page-title";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <>
      <PageTitle>
        404 | Oh ! Il semblerait que vous vous soyez perdu !
      </PageTitle>
      <Image
        src={mementoMori}
        alt="Memento Mori dans un cercle"
        style={{ width: "25%", height: "auto" }}
      />
    </>
  );
}
