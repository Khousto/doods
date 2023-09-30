import type { Metadata } from "next";
import PageTitle from "~/components/page-title/page-title";

export const metadata: Metadata = {
  title: "Shop",
};

export default function Shop() {
  return <PageTitle>SHOP</PageTitle>;
}
