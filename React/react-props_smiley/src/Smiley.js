export default function Smiley({ isHappy }) {
  return <h1>{isHappy ? <span>Happy</span> : <span>notHappy</span>}</h1>;
}
