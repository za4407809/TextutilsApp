import React, { useState } from 'react';

export default function About() {
  const [style, setStyle] = useState({ color: 'white', backgroundColor: 'red' });
  const [btnText, setBtnText] = useState('Enable Light Mode');

  const toggleDarkMode = () => {
    if (style.color === 'black') {
      setStyle({ color: 'white', backgroundColor: 'black' });
      setBtnText('Enable Light Mode');
    } else {
      setStyle({ color: 'black', backgroundColor: 'white' });
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className="accordion" style={style} id="accordionExample">
      {[...Array(3)].map((_, index) => (
        <div className="accordion-item" key={index} style={style}>
          <h2 className="accordion-header" id={`heading${index + 1}`}>
            <button
              className="accordion-button"
              style={style}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded="true"
              aria-controls={`collapse${index + 1}`}
            >
              Accordion Item #{index + 1}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${index + 1}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the accordion item #{index + 1} body.</strong>
            </div>
          </div>
        </div>
      ))}
      <div className="container">
        <button className="btn btn-primary my-3" onClick={toggleDarkMode}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
