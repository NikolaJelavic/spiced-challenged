import Image from "next/image";
import { volumes } from "../../lib/data";

export default function Fellowship() {
    const volume = volumes.find(({slug}) => slug === "the-return-of-the-king")
  return (
    <div key={volume.slug}>
        <h2>{volume.title}</h2>
        <p>{volume.description}</p>
        <Image src={volume.cover} alt={volume.title} width={140} height={230} />
        {volume.books.map((book) => (
          <div key={book.ordinal}>
            <h3>
              {book.ordinal}
              {":  "}
              {book.title}
            </h3>
          </div>
        ))}
      </div>
      
      

  );
}
