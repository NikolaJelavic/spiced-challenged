export default function Greeting({ name }) {
  const coaches = ["Klaus", "Gimena", "Marcell"];
  return <h1>Hello, {coaches.includes(name) ? name : "Stranger"}</h1>;
}
