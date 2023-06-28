import Link from "next/link";
import { introduction } from "../lib/data";


export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/"><h1>Lord of the rings</h1></Link>
      </li>
      <p>{introduction}</p>
      <li>
        <Link href="/volumes"><h2>All Volumes</h2></Link>
      </li>
      {/* <li>
        <Link href="/volumes/the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">The Two Towers</Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king
        ">The Return of the King</Link>
      </li> */}
    </ul>
  );
}
