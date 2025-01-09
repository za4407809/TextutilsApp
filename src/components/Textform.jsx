import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleClick = () => setText(text.toUpperCase());
  const handleLowerClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleOnchange = (event) => setText(event.target.value);
  const capitalizeFirstCharacterOfEachWord = () => {
    setText(text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => alert('Text copied to clipboard!'));
  };

  return (
    <div>
      <h2>{props.title}</h2>
      <textarea className="form-control" onChange={handleOnchange} placeholder="Enter text here" value={text} rows="8"></textarea>
      <button onClick={handleClick} className="btn btn-primary my-3">Convert to Uppercase</button>
      <button onClick={handleLowerClick} className="btn btn-primary my-3 mx-2">Convert to Lowercase</button>
      <button onClick={handleClearClick} className="btn btn-primary my-3 mx-2">Clear Text</button>
      <button onClick={copyToClipboard} className="btn btn-primary my-3 mx-2">Copy Text</button>
      <button onClick={capitalizeFirstCharacterOfEachWord} className="btn btn-primary my-3 mx-2">Capitalize Words</button>

      <h2>Your Text Summaries</h2>
      <p>{text.trim() ? text.trim().split(/\s+/).length : 0} Words and {text.replace(/\s/g, '').length} Characters</p>
      <p>{0.08 * text.split(/\s+/).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}
