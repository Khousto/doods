import type { Metadata } from "next";
import PageTitle from "~/components/page-title/page-title";

export const metadata: Metadata = {
  title: "Illustrations",
};

export default function Illustrations() {
  return <PageTitle>Illustrations</PageTitle>;
}
