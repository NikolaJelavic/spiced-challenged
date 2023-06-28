import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function Fellowship() {
  return (
    <ul>
      <li>
        {/* <p>{volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")}</p> */}
        <Link href="/volumes">Volumes</Link>
        <h1>{volumes[0].title}</h1>
        <p>{volumes[0].description}</p>
      </li>
    {/* <ul>
        {volumes.map((book)=>{
            <li>{volumes[book].books[book]}</li>
        })}
    </ul> */}
    <ul>
        <li>{volumes[0].books[0].ordinal}</li>
        <li>{volumes[0].books[0].title}</li>
    </ul>
    <br></br>
    <ul>
        <li>{volumes[0].books[1].ordinal}</li>
        <li>{volumes[0].books[1].title}</li>
    </ul>
    <br/>
    
    <Image
  src="/images/the-fellowship-of-the-ring.png"
  height={140}
  width={230}
  alt="the-fellowship-of-the-ring"
  />
    </ul>
  );
}
