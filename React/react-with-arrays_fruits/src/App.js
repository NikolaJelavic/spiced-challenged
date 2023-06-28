import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id:1,name: "apples",color:"green", quantity: 3},
    { id:2,name: "oranges",color:"orange", quantity: 2},
    { id:3,name: "carrots",color:"orange", quantity: 5},
    { id:4,name: "mangos",color:"yellow", quantity: 2},
    { id:5,name: "brocolis",color:"green", quantity: 3},
  ]

  return (
    <div className="app">
      <ul>
        {fruits.map(({id,name, color,quantity})=>(
          <Card   key={id}    name={name}     color={color} quantity={quantity} />
        ))}
      </ul>
          </div>
  );
}
