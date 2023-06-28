import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";

export default function App() {
  const [font, setFont] = useState("system-ui");
  

  
  const [note, setNote] = useState("");
  function handleNoteChange(newNote) {
    setNote(newNote);
    localStorage.setItem("new note" , newNote)//
  }







  function handleFontChange(newFont) {
    setFont(newFont);
    localStorage.setItem("new font",newFont)//
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
