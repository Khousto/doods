import Image from "next/image";
import headerimg from "./header.jpg";

export default function Header() {
  return (
    <header>
      <Image
        src={headerimg}
        alt="logo"
        style={{ objectFit: "contain" }}
        sizes="100vw"
        fill
      />
    </header>
  );
}
