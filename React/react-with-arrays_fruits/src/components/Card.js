import "./Card.css";

export default function Card({ name,color, quantity }) {





  
  return <p className="card" style={{backgroundColor:color}}>{quantity}  {name}</p>;
}
