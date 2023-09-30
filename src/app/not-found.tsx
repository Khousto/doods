import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFoundPage() {
  return <h1>404 | Oh ! Il semblerait que vous vous soyez perdu !</h1>;
}
