export default function Button({ color, disabled, text, handleClick }) {
  // function handleClick(){
  //     console.log('You clicked me!');
  // }
  return (
    <button
      disabled={disabled}
      style={{ background: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
