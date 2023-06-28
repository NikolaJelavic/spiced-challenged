import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  return (
    <ul>
      <li>
        <Link href="/volumes">Volumes</Link>
      </li>
      <Image
    src="/images/the-two-towers.png"
    height={144}
    width={144}
    alt="the-two-towers"
  />;
    </ul>
  );
}
