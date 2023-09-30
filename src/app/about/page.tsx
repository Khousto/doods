import type { Metadata } from "next";
import PageTitle from "~/components/page-title/page-title";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <PageTitle>About me </PageTitle>;
}
