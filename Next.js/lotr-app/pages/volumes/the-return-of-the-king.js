import Link from "next/link";
import Image from "next/image";
// import { introduction } from "../lib/data";
// import { volumes } from "../../lib/data";

export default function ReturnOfTheKing() {
  return (
    <ul>
      <li>
        <Link href="/volumes">Volumes</Link>
      </li>
      {/* <p>{volumes[2].description}</p> */}
      <Image
    src="/images/the-return-of-the-king.png"
    height={144}
    width={144}
    alt="the-return-of-the-king"
  />;
    </ul>
  );
}
