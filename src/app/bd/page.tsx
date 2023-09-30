import type { Metadata } from "next";
import PageTitle from "~/components/page-title/page-title";

export const metadata: Metadata = {
  title: "BD",
};

export default function Comics() {
  return <PageTitle>Bande-Dessinée</PageTitle>;
}
