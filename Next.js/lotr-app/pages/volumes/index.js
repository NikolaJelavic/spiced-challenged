import Link from "next/link";

export default function Volumes() {
  return (
    <ul>
      
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/volumes/the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">The Two Towers</Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king
        ">The Return of the King</Link>
      </li>
    </ul>
  );
}
