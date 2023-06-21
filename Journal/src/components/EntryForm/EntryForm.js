import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";

import "./entryForm.css";

export default function EntryForm() {
  return (
    <>
      <form>
        <label>Motto</label>
        <Textarea />
        <label>Notes</label>
        <Textarea />
        <Button />
      </form>
     
    </>
  );
}
