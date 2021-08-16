import React, { useState } from "react";

function Deneme() {
  /*  useState'in obje ile kullanılma örneği  */
  const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });

  return (
    <div>
      <p>Left: {state.left}</p>
      <p>Top: {state.top}</p>
      <p>Width: {state.width}</p>
      <p>Height: {state.height}</p>
      <button
        onClick={(e) => {
          setState((state) => ({ ...state, left: 12, top: 13 }));
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Deneme;
