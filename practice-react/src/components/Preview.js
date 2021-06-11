import { useState } from "react";

export default function Preview(props) {
  let [input, setInput] = useState('');
  function handleSubmit(e) {
    ;
  }
  return (
    <section>
      <h3>Preview Your Vehicle</h3>
      <input placeholder="Search Any Keywords"></input>
      <button name="previewModelSearchBtn" onClick={handleSubmit}>Search</button>
      <div>
        Here come the Preview
        <br />
        {input}
      </div>
    </section>
  );
}